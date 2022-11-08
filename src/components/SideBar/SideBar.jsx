import React from "react";
import classes from  './SideBar.module.scss'
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <nav className={classes.nav}>
                <ul className={classes.sidebarList}>
                     <li className={classes.sidebarItem}>
                        <Link to='/profile' >Profile</Link>
                     </li>
                    <li className={classes.sidebarItem}>
                        <Link to='/dialogs' >Dialogs</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar