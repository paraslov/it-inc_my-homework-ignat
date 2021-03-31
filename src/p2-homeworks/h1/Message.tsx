import React from 'react'
import {MessageType} from "./HW1";
import style from './Message.module.css'

function Message(props: MessageType) {
    return (
        <div className={style.messageWrapper}>
            <img src={props.avatar} alt=""/>
            <div className={style.message}>
                <div>
                    <div className={style.userName}>{props.name}</div>
                    <div className={style.userMessage}>{props.message}</div>
                </div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
