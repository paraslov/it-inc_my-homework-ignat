import {AppStoreType} from '../../h10/bll/store';

const initState = {
    theme: 'some' as TTheme,
}

export const themeReducer = (state: TThemeState = initState, action: TActions): TThemeState => { // fix any
    switch (action.type) {
        case 'para-slov/themeReducer/CHANGE-THEME': {
            return {...state, theme: action.theme}
        }
        default: return state
    }
};

//* ================================================================================================ Action Creators =>
export const changeTheme = (theme: TTheme) => ({type: 'para-slov/themeReducer/CHANGE-THEME', theme} as const)

//* ================================================================================================ Selectors =====>
export const selectTheme = (state: AppStoreType) => state.theme.theme

//* ================================================================================================ Types =========>
export type TTheme = 'some' | 'red' | 'dark' | 'myTheme'
type TThemeState = typeof initState
type TActions = ReturnType<typeof changeTheme>