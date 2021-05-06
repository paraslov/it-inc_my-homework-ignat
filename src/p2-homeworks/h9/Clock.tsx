import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const styleBtn = {margin: '5px'}

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()} :
        ${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()} :
        ${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`
    // const stringTime = date.toLocaleTimeString()

    const stringDate = `${date.getFullYear()}.`+
        `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}.`+
        `${date.getDate()< 10 ? `0${date.getDate()}` : date.getDate()}`
    // const stringDate = date.toLocaleDateString()

    return (
        <div>
            <div style={{height:"50px", margin: '10px 0 0 80px'}}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    style={{width: '90px'}}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton style={styleBtn} onClick={start}>start</SuperButton>
            <SuperButton style={styleBtn} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
