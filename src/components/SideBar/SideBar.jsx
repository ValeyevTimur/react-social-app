import React from "react";
import classes from  './SideBar.module.scss'

const SideBar = () => {
    const sidebarList = ['Profile', 'Messages']
    return (
        <div className={classes.sidebar}>
            <nav className={classes.nav}>
                <ul className={classes.sidebarList}>
                    {sidebarList.map(item => <li className={classes.sidebarItem}>{item}</li> )}
                </ul>
            </nav>
        </div>
    )
}

export default SideBar