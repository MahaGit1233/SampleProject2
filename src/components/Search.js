import React from "react";

const Search =(props)=>{
    const changeHandler=(event)=>{
        const enteredTitle=event.target.value;
        const titleExists=props.Passwords.some((searching)=>searching.title===enteredTitle);

        if (titleExists) {
            props.onSearchFilter(enteredTitle);
        }
    }

    return <div style={{textAlign:"center",fontFamily:"Times New Roman"}}>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" onChange={changeHandler}/>
    </div>
}

export default Search;