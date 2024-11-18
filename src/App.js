import { useState } from "react";
import PasswordForm from "./components/PasswordForm";
import Password from "./components/Password";
import Card from "./UI/Card";
import Search from "./components/Search";

function App() {
  const [password, setPassword] = useState([]);
  const [totalPasswords, setTotalPasswords] = useState(0);
  const [filteredPasswords, setFilteredPasswords] = useState([]);

  const passwordDataHandler = (enteredTitle, enteredPassword) => {
    setPassword((prevPassword) => {
      const updatedPassword = [...prevPassword];
      updatedPassword.push({ title: enteredTitle, password: enteredPassword, id: Math.random().toString() });
      return updatedPassword;
    });
    setTotalPasswords((prevCount) => prevCount + 1);
  }

  const deleteHandler = (passId) => {
    setPassword((prevPassword) => {
      const updatedPassword = prevPassword.filter((pass) => pass.id !== passId);
      if (updatedPassword.length < prevPassword.length) {
        setTotalPasswords((prevCount) => prevCount - 1);
      }
      return updatedPassword;
    });
  }

  const editHandler = (id, updatedTitle, updatedPassword) => {
    setPassword((prevPassword) => {
      prevPassword.map((pass) => pass.id === id ? { ...pass, title: updatedTitle, password: updatedPassword } : pass);
    })
  };

  const searchFilterHandler = (searchedTitle) => {
    const filtered = password.filter((filtering) => filtering.title === searchedTitle);
    setFilteredPasswords(filtered);
  }

  return (
    <Card>
      <div style={{ fontFamily: "Times New Roman", marginLeft: "25px" }}>
        <h1 style={{ textAlign: "center" }}>Password Keeper</h1>
        <p style={{ textAlign: "center" }}>Total Passwords: {totalPasswords}</p>
        <Search Passwords={password} onSearchFilter={searchFilterHandler} /> <br />
        <PasswordForm onPasswordData={passwordDataHandler} />
        <h2>All Passwords</h2>
      </div>
      <div style={{ fontFamily: "Times New Roman" }}>
        <Password passwords={filteredPasswords.length > 0 ? filteredPasswords : password} onDelete={deleteHandler} onEdit={editHandler} />
      </div>
    </Card>
  );
}

export default App;
