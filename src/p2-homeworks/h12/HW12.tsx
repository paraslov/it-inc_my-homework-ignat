import React, {ChangeEvent, useCallback, useEffect} from 'react'
import s from './HW12.module.css'
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeTheme, selectTheme, TTheme} from './bll/themeReducer'

const themesOptions: TTheme[] = ['dark', 'red', 'some', 'myTheme']

export type THW12Props = {
    theme?: TTheme
}

function HW12(props: THW12Props) {
    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)

    useEffect(() => {
        if (props.theme) {
            dispatch(changeTheme(props.theme))
        }
    }, [dispatch])

    const onChangeCallback = useCallback((e: ChangeEvent<HTMLSelectElement>) =>
        dispatch(changeTheme(e.currentTarget.value as TTheme)), [theme, dispatch])

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']} style={{marginRight: '10px'}}>
                homeworks 12
            </span>
            <SuperSelect options={themesOptions}
                         value={theme}
                         onChange={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
