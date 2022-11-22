import React from "react";
import Dialogs from '../Dialogs'
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogsPage.dialogData
    }
}

const mapDispatchToProps = (dispatch) => { return {}}

const SideBar = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default SideBar