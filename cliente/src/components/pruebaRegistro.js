import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../registro.css';

function Registro() {

    const [nombreCompleto, setNombreCompleto] = useState("");
    const [numeroIdentidad, setNumeroIdentidad] = useState(0);
    const [fechaRegistro, setFechaRegistro] = useState({varOne:new Date()});
    const [telefono1, setTelefono1] = useState("");
    const [telefono2, setTelefono2] = useState("");
    const [direccion, setDireccion] = useState("");
    const [edad, setEdad] = useState(0);
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const registrar = () =>{
        Axios.post("http://localhost:3001/", {
            nombreCompleto: nombreCompleto,
            numeroIdentidad: numeroIdentidad,
            fechaRegistro: fechaRegistro,
            telefono1: telefono1,
            telefono2: telefono2,
            direccion: direccion,
            edad: edad,
            correo: correo,
            contraseña: contraseña
        }).then((response)=>{
            if(response.data.status){
                alert('Bienvenido')
                window.location.href="/Inicio";
            }if(response.data.message){
                setLoginStatus(response.data.message)
            }else{
                setLoginStatus(response.data[0])
            }
        });
    }

    let schema = yup.object().shape({
        nombreCompleto: yup.string().required("campo obligatorio"),
        numeroIdentidad: yup.number().positive().integer().required(),
        fechaRegistro: yup.date().required(),
        telefono1: yup.number().positive().integer().required(),
        telefono2: yup.number().positive().integer().required(),
        direccion: yup.string().required("campo obligatorio"),
        edad: yup.number().positive('Solo numeros positivos').integer().required(),
        correo: yup.string().email("correo invalido").required("campo obligatorio"),
        contraseña: yup.string().required("campo obligatorio").min(6, "minimo 6 caracteres").max(15, "Menos de 15 caracteres")
    })

    const { register, handleSubmit, errors } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) =>{
        console.log(data);
    };

    return(
        <div className="divisionRegistro">
            <div className="imgRegistro"></div>
            <form className="formularioRegistro" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="letraRegistro">Registro </h2>
            <h5 className="llenarRegistro">Llene todos los campos</h5>

            <div className="posicionRegistro">
                <label>Nombre Completo</label>
                <input className="bordeInput1"
                type="text" placeholder="Escriba su nombre" 
                name="nombreCompleto" ref={register}
                onChange={(e) => {
                    setNombreCompleto(e.target.value); 
                } } 
                ></input>
                <p className="text-danger"> {errors.nombreCompleto?.message} </p>
            </div>
            <div className="row">
                <div className="col-md-4">
                <label>Numero de Identidad</label>
                <input className="bordeInput"
                type="text" placeholder="Escriba su numero de identidad" 
                name="numeroIdentidad" ref={register}
                onChange={(e) => {
                    setNumeroIdentidad(e.target.value); 
                } } 
                ></input>
                <p className="text-danger"> {errors.numeroIdentidad?.message} </p>
                </div>

                <div className="col-md-4 offset-md-3">
                <label>Fecha de Registro</label>
                <input className="bordeInput"
                type="date" placeholder="Escriba fecha de Registro" 
                name="fechaRegistro" ref={register}
                onChange={(e) => {
                    setFechaRegistro(e.target.value); 
                } } 
                ></input>
                <p className="text-danger"> {errors.fechaRegistro?.message} </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                <label>Telefono #1</label>
                <input className="bordeInput" 
                type="text" placeholder="Escriba telefono" 
                name="telefono1" ref={register}
                onChange={(e) => {
                    setTelefono1(e.target.value); 
                } } 
                ></input>
                <p className="text-danger"> {errors.telefono1?.message} </p>
                </div>

                <div className="col-md-4 offset-md-3">
                <label>Telefono #2</label>
                <input className="bordeInput"
                type="text" placeholder="Escriba telefono2" 
                name="telefono2" ref={register}
                onChange={(e) => {
                    setTelefono2(e.target.value); 
                } } 
                ></input>
                <p className="text-danger"> {errors.telefono2?.message} </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                <label>Direccion</label>
                <input className="bordeInput"
                type="text" placeholder="Escriba su direccion" 
                name="direccion" ref={register}
                onChange={(e) => {
                    setDireccion(e.target.value); 
                } } 
                ></input>
                 <p className="text-danger"> {errors.direccion?.message} </p>
                </div>

                <div className="col-md-4 offset-md-3">
                <label>Edad</label>
                <input className="bordeInput"
                type="number" placeholder="Escriba su edad" 
                name="edad" ref={register}
                onChange={(e) => {
                    setEdad(e.target.value); 
                } } 
                ></input>
                 <p className="text-danger"> {errors.edad?.message} </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                <label>Correo Electronico</label>
                <input className="bordeInput"
                type="email" placeholder="Escriba su email" 
                name="correo" ref={register}
                onChange={(e) => {
                    setCorreo(e.target.value); 
                } } 
                ></input>
                 <p className="text-danger"> {errors.correo?.message} </p>
                </div>

                <div className="col-md-4 offset-md-3">
                <label>Contraseña</label>
                <input className="bordeInput"
                type="password" placeholder="Escriba su contraseña" 
                name="contraseña" ref={register}
                onChange={(e) => {
                    setContraseña(e.target.value); 
                } } 
                ></input>
                 <p className="text-danger"> {errors.contraseña?.message} </p>
                </div>
            </div>

                <button className="botonRegistro" type="submit" onClick={registrar}>Registrar</button>
                
                <p className="forgot-password text-center par">
                    ¿Ya estás registrado <a href="./login">iniciar sesión?</a>
                </p>
               <h7 className="text-danger">{loginStatus}</h7>
                <div className="espacio"></div>
            </form>
        </div>
    );
}

export default Registro;