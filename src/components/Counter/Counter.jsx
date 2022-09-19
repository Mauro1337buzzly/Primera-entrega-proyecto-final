import React, { useState } from "react";

const Counter = ({init, stock}) => { 

    const [counter, setCounter] = useState(init)
    const add = () => { 
        if(counter < stock)
        {
            setCounter(counter + 1)
        }
    }

    const sub = () => { 
        if(counter > init){
        setCounter(counter - 1);
        };
    }

    const addCart = () => {
        setCounter(counter)
        console.log("AddToCart");

    }

    return (  
    <>
    <button onClick={()=> add()}> + </button>
    <button onClick={()=> sub()}> - </button>
    <span >{counter}</span>
    <button onClick={()=> addCart()}> Agregar al carrito</button>
    

    </> 
        )
       
    ;


};

export default Counter;