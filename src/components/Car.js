function Car(props){
    // here props receiving
    // const {brand,color}= props   //we selecting particular, what we want
    const {carinfo} = props
    const {brand,color}= carinfo
    const text=`my car name is harsha and brand name is ${brand}, and car color is ${color}` ;
    // const text = `my car info ${carinfo}`;
      return(
        <h1>{text}</h1>
      );
    }

export default Car;