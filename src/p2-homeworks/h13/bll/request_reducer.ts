import {AppStoreType} from '../../h10/bll/store';
import {Dispatch} from 'redux';
import {requestsAPI} from '../api/requests_api';

const initState = {
    successResponse: false,
    response: {message: '', error: false},
    btnDisabled: false
}

export const requestReducer = (state: TRequestState = initState, action: TActions): TRequestState => { // fix any
    switch (action.type) {
        case 'para-slov/requestReducer/CHANGE_SUCCESS':
            return {...state, successResponse: !state.successResponse}
        case 'para-slov/requestReducer/SET_RESPONSE':
            return {...state, response: {...action.response}}
        case 'para-slov/requestReducer/SET_DISABLED':
            return {...state, btnDisabled: action.btnDisabled}
        default:
            return state
    }
};

//* ================================================================================================ Action Creators =>
export const changeSuccess = () => ({type: 'para-slov/requestReducer/CHANGE_SUCCESS'} as const)
export const _setDisabled = (btnDisabled: boolean) =>
    ({type: 'para-slov/requestReducer/SET_DISABLED', btnDisabled} as const)
export const _setResponse = (response: { message: string, error: boolean }) =>
    ({type: 'para-slov/requestReducer/SET_RESPONSE', response} as const)

//* ================================================================================================ Selectors =====>
export const selectSuccess = (state: AppStoreType) => state.request.successResponse
export const selectIsError = (state: AppStoreType) => state.request.response.error
export const selectResponseMessage = (state: AppStoreType) => state.request.response.message
export const selectIsBtnDisabled = (state: AppStoreType) => state.request.btnDisabled

//* ================================================================================================ Thunks ========>
export const requestToServer = (successResponse: boolean) => (dispatch: Dispatch<TActions>) => {
    dispatch(_setDisabled(true))
    requestsAPI.postRequest({success: successResponse})
        .then(data => {
            dispatch(_setResponse({message: data.errorText, error: false}))
            dispatch(_setDisabled(false))
        })
        .catch(error => {
            let errorText = error.response ? error.response.data.errorText : error.message
            dispatch(_setResponse({message: errorText, error: true}))
            dispatch(_setDisabled(false))
        })
}

//* ================================================================================================ Types =========>
type TRequestState = typeof initState
type TActions = ReturnType<typeof changeSuccess> | ReturnType<typeof _setResponse> | ReturnType<typeof _setDisabled>