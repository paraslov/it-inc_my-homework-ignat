import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './HW5.module.css'
import {PATH} from './Routes';

function Header() {
    const [toggleLinks, setToggleLinks] = useState(true)
    return (
        <div>
            <div>react homeworks:</div>
            <div>
                <nav className={`${s.headerLinks} ${!toggleLinks ? s.active : ''}`}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>pre-junior</NavLink>
                    <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink}>junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeLink}>junior-plus</NavLink>
                    <span className={s.toggleControl} onClick={() => setToggleLinks(true)}/>
                </nav>
                {toggleLinks && <span className={s.toggleControl} onClick={() => setToggleLinks(false)}/>}
            </div>
        </div>
    )
}

export default Header
