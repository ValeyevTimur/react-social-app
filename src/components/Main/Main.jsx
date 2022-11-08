import React from "react";
import SideBar from "../SideBar";
import Content from "../Content";
import classes from './Main.module.scss'

const Main = () => {
    return (
        <main className={classes.main}>
            <SideBar />
            <Content />
        </main>
    )
}

export default Main