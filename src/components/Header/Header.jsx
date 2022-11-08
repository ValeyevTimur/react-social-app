import React from "react";
import classes from './Header.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <Link to='/'>Logo</Link>
        </header>
    )
}

export default Header