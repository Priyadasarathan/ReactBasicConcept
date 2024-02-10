import { useState } from "react";
function FavoriteColor(){
    // let color = "blue"
    const [color, setColor] = useState('Blue')
    return <>
    <h1>My Favorite color is {color}</h1>
    <button onClick={()=>{setColor('Red')}}>Click here to change</button>
    </>
}   
export default FavoriteColor;