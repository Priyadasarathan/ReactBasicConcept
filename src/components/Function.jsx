//Parent component 
import React from "react";
import ChildComponent from "./Function2";
// import Function2 from './Function2'


function ParentComponent(){
    const onclickhandle=()=>{
        console.log('yes clicked here')
        return(
            <>
            <p>welcome to this page</p>
            </>
        )
    }
   return(
    <div>
        <h1>Passing function to another component</h1>
        
        <ChildComponent onclickhandle={onclickhandle}/>
    </div>
   )

}
export default ParentComponent;

