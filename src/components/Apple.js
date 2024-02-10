import React from "react";

class Apple extends React.Component{
    render(){
        const {appleInfo}= this.props
        const {type,color}=appleInfo
        return(
            <h1>apple type is {type}, color is {color}</h1>
        );
    }
}
export default Apple;