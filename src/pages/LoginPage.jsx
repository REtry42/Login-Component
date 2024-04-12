import { useRef } from "react";
import LoginForm from "../components/loginPage/LoginForm";

export default function LoginPage({ setIsConnected }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(usernameRef.current.value, passwordRef.current.value);

    setIsConnected(isValidLogin(usernameRef.current.value,passwordRef.current.value));
  }
  
  return (
    <LoginForm usernameRef={usernameRef} passwordRef={passwordRef} handleSubmit={handleSubmit} />
  )
}


function isValidLogin(username, password) {
  const database = {
    clayton: {email: "clayton@gmail.com", password: "12345678"},
    bob: {email: "bobtheblob@hotmail.com", password: "qwerty12"}
  }

  return database[username].password == password;
}