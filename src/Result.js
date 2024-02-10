import React from "react";
import './App.css';

function Result({ secretNum, term }) {
    let result;
    if (term) {
        if (term > secretNum) {
            result = 'higher';
        } else if (term < secretNum) {
            result = "lower";
        } else if (term == secretNum) {
            result = "yipee!!! correct";  
        } else {
            result = "please enter the valid input";
        }
        return <>
            <h1 className="result">You Guessed : {result}</h1>
        </>
    }
}


export default Result;