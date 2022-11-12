import React from "react";
import classes from './Dialog.module.scss'


const Dialog = ({dialogInfo}) => {
    console.log(dialogInfo);
    return (
        <div className={classes.dialog}>
         {
            dialogInfo.map((item, index) => (
                <div>
                    <div>{item.text}</div>
                </div>
            ))
         }
        </div>
    )
}
export default Dialog