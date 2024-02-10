import React from "react";
import { useNavigate } from "react-router-dom";



export default function Login(){
    const navigate = useNavigate() //hook

    function onSubmit(){
        navigate('/Dashboard');
    }
    return<>
    <h1> User Login page</h1>
    <button  onClick={onSubmit}>LOGIN HERE</button>
    </>
}