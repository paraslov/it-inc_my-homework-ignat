import {loadingReducer} from "./loadingReducer"
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {themeReducer} from '../../h12/bll/themeReducer'
import {requestReducer} from '../../h13/bll/request_reducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: requestReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev
