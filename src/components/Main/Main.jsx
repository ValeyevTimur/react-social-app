import React from "react";
import classes from './Main.module.scss'
import Content from "../Content";

const Main = () => {
    return (
        <div className={classes.content}>
            <Content />
        </div>
    )
}

export default Main