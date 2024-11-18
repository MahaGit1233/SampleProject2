import React from "react";
import PasswordDisplay from "./PasswordDisplay";

const Password = (props) => {
    const handleEdit=(id,currentTitle,currentPassword)=>{
        const newTitle=prompt("Enter the new Title:",currentTitle);
        const newPassword=prompt("Enter the new Password:",currentPassword);

        if (newTitle!==null&&newPassword!==null) {
            props.onEdit(id,newTitle,newPassword);
        }
    };

    return (
        <ul>
            {props.passwords.map(adding => (
                <PasswordDisplay key={adding.id} id={adding.id} onDelBtn={props.onDelete} onEditBtn={()=>handleEdit(adding.id,adding.title,adding.password)}>{adding.title}  {adding.password}  </PasswordDisplay>
            ))}
        </ul>
    );
}

export default Password;