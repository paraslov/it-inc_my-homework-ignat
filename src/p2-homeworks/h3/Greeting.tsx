import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyEnterPress: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyEnterPress, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div className={s.wrapper}>
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            error={error ? error : ''}
                            className={inputClass}
                            onKeyPress={onKeyEnterPress}/>
            <SuperButton onClick={addUser}>add</SuperButton>
            <span>total users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
