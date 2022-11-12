import React from "react";
import classes from './Header.module.scss'
import {Link} from "react-router-dom";
import logoSvg from '../../assets/logo/logo.svg'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
            <Link to='/' >
                <img className={classes.image} src={logoSvg} alt="logo" />
            </Link>
            <h2>WhatsApp Clone</h2>
            </div>
            <div className="menu">
                Settings
                Profile
            </div>
        </header>
    )
}

export default Header