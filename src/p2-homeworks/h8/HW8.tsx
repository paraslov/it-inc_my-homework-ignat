import React, {useState} from 'react'
import {checkActionCreator, homeWorkReducer, sortActionCreator} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

const btnStyle = {
    width: '150px',
    margin: '5px'
}
const tableRowStyle = {
    padding:'3px',
    border: '1px solid #333',
    width: '150px',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between'
}

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    const finalPeople = people.map(p => (
        <div key={p._id} style={tableRowStyle}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortActionCreator('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortActionCreator('down')))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkActionCreator(18)))

    return (
        <div>
            <hr/>
            homeworks 8

                <div style={{margin:'5px'}}>{finalPeople}</div>

                <div><SuperButton style={btnStyle} onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton style={btnStyle} onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton style={btnStyle} onClick={check18}>check 18</SuperButton></div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
