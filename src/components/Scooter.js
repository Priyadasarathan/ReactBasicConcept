import { useState } from "react";
function Scooter(){
    // let [color, setColor] = useState("green")
    // let [brand, setBrand] = useState("Activa")
    // let [model, setModel] = useState("220")
    // let [year, setYear] = useState("2001")
    
    //create single state for multi object
    let [scooter, setScooter]=useState({
        color:"Red",
        brand:"Acitva",
        model:"220",
        year:"2001"
    });
    console.log(scooter,'scooter update');
    return<>
    <h1>my Scooty</h1>
    <p>color:{scooter.color}</p>
    <p>Brand:{scooter.brand}</p>
    <p>Model:{scooter.model}</p>
    <p>year:{scooter.year}</p>
    <button onClick={()=>{setScooter(previousState =>{return{...previousState, brand:'passion'}})}}>Update</button>
    </>
}
export default Scooter;