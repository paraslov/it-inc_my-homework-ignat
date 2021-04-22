import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './HW5.module.css'
import {PATH} from './Routes';

function Header() {
    return (
        <div>
            <div>react homeworks:</div>
            <div>
                <nav className={s.headerLinks}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>pre-junior</NavLink>
                    <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink}>junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeLink}>junior-plus</NavLink>
                    <span className={s.toggleControl}/>
                </nav>
            </div>
        </div>
    )
}

export default Header
