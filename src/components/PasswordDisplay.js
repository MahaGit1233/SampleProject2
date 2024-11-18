import React from "react";

const PasswordDisplay = (props) => {

    // const handleClick=()=>{
    //     if (props.onDelBtn) {
    //         return delBtnHandler;
    //     }
    //     else if (props.onEditBtn) {
    //         return editBtnHandler;
    //     }
    // }
    const delBtnHandler = () => {
        props.onDelBtn(props.id);
    }

    // const editBtnHandler=()=>{
    //     props.onEditBtn(props.id);
    // }

    return (
        <li>{props.children} 
            <button onClick={delBtnHandler}>Delete</button>
            <button onClick={props.onEditBtn}>Edit</button>
        </li>
    )
}

export default PasswordDisplay;