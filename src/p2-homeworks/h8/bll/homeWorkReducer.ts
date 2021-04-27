import {UserType} from '../HW8';

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up') {
                return [...state].sort((a, b) => a.name < b.name ? -1 : 1)
            } else {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            }
        }
        case 'check': {
            return state.filter((p) => p.age >= action.payload)
        }
        default: return state
    }
}

type ActionsType = ReturnType<typeof sortActionCreator> | ReturnType<typeof checkActionCreator>

export const sortActionCreator = (payload: 'up' | 'down') => ({type: 'sort', payload} as const)
export const checkActionCreator = (payload: number) => ({type: 'check', payload} as const)


