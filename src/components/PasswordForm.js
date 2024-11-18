import React, { useState } from "react";

const PasswordForm = (props) => {
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredPassword,setEnteredPassword]=useState('');
    const [isValid,setIsValid]=useState(true);

    const titleChangeHandler = (event) => {
        if (event.target.value.trim().length>0) {
            setIsValid(true);
        }
        setEnteredTitle(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        if (event.target.value.trim().length>0) {
            setIsValid(true);
        }
        setEnteredPassword(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredTitle.trim().length===0||enteredPassword.trim().length===0) {
            setIsValid(false);
            return;
        }
        props.onPasswordData(enteredTitle,enteredPassword);
        setEnteredTitle('');
        setEnteredPassword('');
    }

    return (
        <form onSubmit={formSubmitHandler} >
            <div>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" onChange={titleChangeHandler} value={enteredTitle}/> <br /> <br />
                <label htmlFor="pass">Password: </label>
                <input id="pass" type="text" onChange={passwordChangeHandler} value={enteredPassword}/> <br /> <br />
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PasswordForm;