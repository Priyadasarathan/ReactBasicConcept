// import Car from "./components/Car";
// import Car from '/Car'
import Car from './Car';
import Apple from './Apple';
function Garage(){
  // const brand = 'zuzki';
  // // const color = 'green';
  //we passing the props in objects
  const isDoorOpened = false;
  const carinfo = {brand:'nano', color:'light-green'}
  // const carinfo = {};

  // props passing for class
  const appleInfo = {type:'ootyapple', color:'green'}
const showCarInfo = carinfo.brand !==undefined && carinfo.color !==undefined 

const carInfoList = [
  {brand:'bmw', color:'green'},
  {brand:'rolex', color:'black'},
  {brand:'aadi',color:'white'}
]
const numberlist =[
  1,2,3,4,5
];
    return(
      <>
        {/* we used empty <></> */}
        <h1>who lives in my garage?</h1>
        {/* <Car brand={brand} color={'Green'}/>   */}
        {/* {carinfo.brand !==undefined && carinfo.color !==undefined ?
        <Car carinfo={carinfo}/>: null}   */}
        {showCarInfo && <Car carinfo={carinfo}/>}

         {/* Conditional Rendering */}
        {/* passing the props like whatever the properties */}
        <Apple appleInfo = {appleInfo}/>
        {isDoorOpened?<h1>Grage door is opened</h1>:<h1>Grage door is closed</h1>}

        <ul>
          {carInfoList.map((carInfoList)=><li key={carInfoList.brand}><Car carinfo={carInfoList}/></li>)}
        </ul>

        <ol>
          {numberlist.map((number,index)=> <p key={index}>{number}</p>)}
        </ol>
      </>
    )
  }

  export default Garage;