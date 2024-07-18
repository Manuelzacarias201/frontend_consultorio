import React from 'react';
import Form from "../../organisms/Form/Form";
import Input from "../../atoms/Input/Input.jsx";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css"

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/SecretarioHome");
    };
    return (
        <>
            <Form 
            imgSrc="src/assets/images/contacto.png" 
            imgAlt="Imagen de contacto"
             buttonText="INICIAR SESIÓN"
             handleClick={handleLogin}
            >
            <Input type="text" placeholder="Correo electronico"  />
            <Input type="password" placeholder="Contraseña" />
               
            </Form>
        </>
    );
}

export default Login;
