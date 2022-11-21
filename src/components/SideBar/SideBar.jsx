import React from "react";
import classes from  './SideBar.module.scss'
import Dialogs from '../Dialogs'

const SideBar = ({state}) => {
    return (
        <div className={classes.sidebar}>
            <nav className={classes.nav}>
                <Dialogs dialogData = {state.dialogsPage.dialogData} />
            </nav>
        </div>
    )
}

export default SideBar