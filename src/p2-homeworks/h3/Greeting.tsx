import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

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
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyEnterPress}/>
            <span className={inputClass}>{error ? error : ''}</span>
            <button onClick={addUser}>add</button>
            <span>total users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
