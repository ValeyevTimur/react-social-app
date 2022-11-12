import React from "react";
import classes from  './SideBar.module.scss'
import Dialogs from '../Dialogs'

const SideBar = ({dialogData}) => {

    return (
        <div className={classes.sidebar}>
            <nav className={classes.nav}>
                <Dialogs dialogData = {dialogData} />
            </nav>
        </div>
    )
}

export default SideBar