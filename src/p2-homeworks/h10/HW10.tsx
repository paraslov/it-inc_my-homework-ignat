import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {Dispatch} from 'redux';
import {loadingAC, LoadingReducerActionsType} from './bll/loadingReducer';
import loadingPic from '../../Assets/spinner-icon.gif'

function HW10() {
    const dispatch = useDispatch<Dispatch<LoadingReducerActionsType>>()
    const loading = useSelector((state: AppStoreType) => state.loading.isLoading);

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => dispatch(loadingAC()), 2000)
        console.log('loading...');
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div style={{margin: '5px 0 13px 50px'}}>
                        <img style={{height: '31px', width: '31px'}} src={loadingPic} alt="wait for loading"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton style={{width: '150px', margin: '5px'}} onClick={setLoading}>
                            set loading...
                        </SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
