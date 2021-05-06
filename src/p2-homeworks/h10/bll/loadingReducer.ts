const initState = {
    isLoading: false
};

type InitStateType = typeof initState

export const loadingReducer = (state: InitStateType = initState, action: LoadingReducerActionsType): InitStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: !state.isLoading};
        }
        default:
            return state;
    }
};

export type LoadingReducerActionsType = ReturnType<typeof loadingAC>

export const loadingAC = () => ({type: 'LOADING'} as const);