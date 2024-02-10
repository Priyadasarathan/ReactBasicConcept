// import React from "react";
// import { ReactDOM } from "react";
// class Statecar extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             brand:"ford",
//             model:"Mustang",
//             color:"red",
//             year:1984
//         };
//     }
//     changeColor=()=>{
//         this.setState({color:"blue"});
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My {this.state.brand}</h1>
//                 <p>
//                     It is a {this.state.color}
//                     {this.state.model}
//                     from {this.state.year}.
//                 </p>
//                 <button type="button"
//                 onClick={this.changeColor}>change color</button>
//             </div>
//         );
//     }
// }
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Car/>);
// export default Statecar;