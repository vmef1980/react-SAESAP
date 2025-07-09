import { Component, useState } from "react";
//import LoginForm from "../components/auth/LoginForm";
import AuthImage from "../components/auth/AuthImage";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import { useAuth } from "../context/authContext";

function Login(){
  
  let img = "https://b.stablecog.com/b35766d5-d44e-4803-aa76-aef534c5d792.jpeg"

  const { login } = useAuth();
  
  // Inicializando nuestras variables de State
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    //console.log(e);
    e.preventDefault();
    console.log(email,pass);
    login(email, pass);
  }

  const fields = [
    {
      component: AuthInput,
        props: {
          label: "Correo Eletrónico",
          paramType: "email",
          paramId: "email",
          paramOnChange: (e) => setEmail(e.target.value),
          paramPlaceholder: "example@mail.com",
          paramValue: email
        }
    },

    {
      component: AuthInput,
        props: {
          label: "Contraseña",
          paramType: "password",
          paramId: "password",
          paramOnChange: (e) => setPass(e.target.value),
          paramPlaceholder: "******",
          paramValue: pass
        }
    },

    {
      component: AuthButton,
        props: {
          nameAction: handleLogin,
          label: "Iniciar Sesión",
          labelLink: "Registrarse",
          endpoint: "/register"
        }
    }
  ]

  return(
    <>
     <div className="flex justify-center items-center h-screen drop-shadow-xl mt-1">
          <AuthImage imageAuth={img}/>
          <AuthForm fields={fields}/>
      </div>
      
    </>

  );
}

export default Login; 