import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from './HW2';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    let priorityColor: string = ''
    if (props.affair.priority === 'low') {
        priorityColor = s.green
    } else if (props.affair.priority === 'middle') {
        priorityColor = s.orange
    } else {
        priorityColor = s.red
    }

    return (
        <div className={s.wrapper}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={`${s.item} ${priorityColor}`}>
                {props.affair.priority}
            </div>

            <button className={s.btn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
