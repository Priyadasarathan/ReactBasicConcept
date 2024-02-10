import React from "react";

class Carstate extends React.Component{
    constructor(){
        super();
        this.state = {color:'green', model:"Ford"}
    }
    render(){
        return<>
        <h1>My car color is {this.state.color} and model is {this.state.model}</h1>
        <button onClick={()=>{this.setState(previousState=>{return{...previousState, color:'white'}})}}>Change color</button>
        </>
    }
}
export default Carstate;
