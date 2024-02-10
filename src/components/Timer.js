import { useEffect, useState } from "react"

function Timer(){
   
    const [count, setCount]=useState(0);
    // function checkCount(){
    //     if (count>10){
    //         setCount(1);
    //     }
    // }
    useEffect(()=>{
        console.log('screen rednered!')
        // checkCount()
       // setCount(1) 
       
    })

   

    function updateCount(){
        setCount((previouscount)=>{return previouscount+1})
    }
    return <>
    <h1>I have rendered {count} time!</h1>
    <button onClick={updateCount}>Increase count</button>
  
    </>
}
export default Timer;