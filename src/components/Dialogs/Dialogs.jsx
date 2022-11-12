import React from "react";
import classes from './Dialogs.module.scss'
import { Link } from "react-router-dom";
import profileSvg from '../../assets/icons/profile.svg'

const Dialogs = ({dialogData}) => {
    return (
        <div className={classes.dialogs}>
        {dialogData.map((item, index) => (
            <Link to={`/dialogs/${item.name}/${item.id}`}>
                <div className={classes.dialog} key={index}>
                    <div className={classes.dialogsItem}>
                        <div className={classes.profileImage}>
                            <img src={profileSvg} alt="avatar" />
                        </div>
                        <div className={classes.header}>
                            <p className={classes.name}>{item.name}</p>
                            <p className={classes.shortText}>{item.shortText}</p>
                        </div>
                    </div>
                    <div className={classes.messageStatus}>
                        <div className={classes.time}>yesterday</div>
                    </div>
                </div>
            </Link>
    ))}
    </div>
    )
}

export default Dialogs