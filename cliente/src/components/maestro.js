import React, { useState } from "react";
import axios from 'axios';
import "../LoginPrueba.css";

function Maestro(){

  const [user, setUser] = useState({
    correo: '',
    contrasenia: ''
});

const [loginStatus, setLoginStatus] = useState("");

const { correo, contrasenia } = user;

const handleInputChange = (e) =>{

    setUser({
        ...user,
        [e.target.name] : e.target.value
    });

   
}

const handleSutmit = async (e) =>{
    e.preventDefault();
    console.log(user);

    const res = await axios.post('http://localhost:3001/login', user);
    const data = await res.data;
    
    if(data.auth){
        localStorage.setItem('user', JSON.stringify(data));
        window.location.href = '/Navbar2';
    }

}

const validar = () => {
    axios.post("http://localhost:3001/login", {
      correo: correo,
      contrasenia: contrasenia
    }).then((response) => {
      if (response.data.status) {
        alert('Bienvenido '+ correo)
        window.location({href: './Navbar2'});
      }
        if (response.data.message) {
        setLoginStatus(response.data.message)
      }
      else{
        setLoginStatus(response.data[0])}
    })

  };

  return(
    <div className="flex1">
    <div className="imgSignUp1"></div>
    <form className="formSignUp">
        <div className="form-group titulo1">
            <h3 className="letraH">Inicio Estudiante</h3>
            <div className="espacio9"></div>
        </div>

        <div className="posicionLogin">
            <label>Correo Electronico</label>
            <input type="email" className="form-control" 
            onChange={handleInputChange} value={correo} 
            name="correo" placeholder="Ingrese su correo" />
        </div>
        <div className="espacio8"></div>
        <div className="posicionLogin">
            <label >Contraseña</label>
            <input type="password" name="contrasenia" 
            onChange={handleInputChange} value={contrasenia} 
            className="form-control" id="exampleInputPassword1" 
            placeholder="Contraseña" />
        </div>
        <div className="espacio8"></div>
        <button type="submit" className="btn-login1" onClick={validar}>Iniciar Sesion</button>
        <h6 className="text-danger">{loginStatus}</h6>
        <div className="posicionLogin">
            <div className="final">
                <p>No puedes iniciar sesion? <a href="/">Regresar</a></p>
            </div>
            <p className="forget">Olvidaste tu contraseña?</p>
        </div>
        <div className="espacio7"></div>
    </form>
    </div>
  )

}

export default Maestro;