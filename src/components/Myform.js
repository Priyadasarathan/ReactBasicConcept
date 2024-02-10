import { useState } from "react";
import React from "react";

function Myform() {
    // const [name, setname] = useState("")
    // const [age, setage] = useState("")
    // const [email, setemail] = useState("")
    const [inputs, setInputs] = useState({ name: 'priya', age: '22', email: '@gmail.com', phone: '+91' ,select:'India', about:"I am a student"})

    // console.log(phone,'phonenumber');
    function submit(e) {
        e.preventDefault()
        console.log("form submitted");
        console.log(inputs, 'value');
    }
    function handler(e) {
        const name = e.target.name
        const value = e.target.value
        setInputs((previousState) => { return { ...previousState, [name]: value } });
    }
    // function values(e){
    //     inputs((previousState)=>{return {}})
    // }
    return <form onSubmit={submit}><br></br><br></br>
        <label>Enter your name <input type='text' name="name" value={inputs.name} onChange={handler} /></label><br></br><br></br>
        <label>Enter your age <input type='text' name="age" value={inputs.age} onChange={handler} /></label><br></br><br></br>
        <label>Enter your Email <input type='text' name="email" value={inputs.email} onChange={handler} />
        </label><br></br><br></br>
        <label>Enter your phone number <input type='text' name="phone" value={inputs.phone} onChange={handler} /></label><br></br><br></br>
        <label>select country <select type='select' name="select" value={inputs.select} onChange={handler}>
        <option>select</option>
        <option>India</option>
        <option>Austrelia</option>
        <option>Mumbai</option>
        <option>Singapore</option></select>
        </label><br></br><br></br>
        <label>Enter about you<textarea name="about" value={inputs.about} onChange={handler}></textarea></label><br></br><br></br>
        <button type="submit">submit</button>
    </form>
}

export default Myform;