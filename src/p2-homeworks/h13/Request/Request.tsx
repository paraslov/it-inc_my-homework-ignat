import React from 'react'
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {
    changeSuccess,
    requestToServer, selectIsBtnDisabled,
    selectIsError,
    selectResponseMessage,
    selectSuccess
} from '../bll/request_reducer';


export const Request: React.FC = () => {
    const dispatch = useDispatch()
    const successResponse = useSelector(selectSuccess)
    const isError = useSelector(selectIsError)
    const responseMessage = useSelector(selectResponseMessage)
    const isBtnDisabled = useSelector(selectIsBtnDisabled)
    const marginStyle = {marginTop: '10px'}

    const onChange = () => dispatch(changeSuccess())
    const onRequest = () => dispatch(requestToServer(successResponse))

    return (
        <div style={marginStyle}>
            <SuperButton onClick={onRequest} disabled={isBtnDisabled}>
                Request
            </SuperButton>
            <br/>
            <SuperCheckbox checked={successResponse} onChangeChecked={onChange}>
                success
            </SuperCheckbox>
            <div style={marginStyle}>
                Response:
                <span style={{color: isError ? 'red' : 'mediumaquamarine'}}>
                    {responseMessage}
                </span>
            </div>
        </div>
    )
}