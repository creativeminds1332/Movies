import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function MyButton() {
const[counter,setCounter] =useState(0);
const[variant, setVariant]=useState('outlined')
function button3(){
    if(variant=='contained'){
        return "outlined";
    }
    if(variant=="outlined"){
        return "text" ;
    }
    if(variant=="text"){
        return "contained" ;
    }
}

  return (
    <>
      <Button onClick={()=>setCounter(counter+1)} variant="contained">+</Button>
      <h1>{counter}</h1>
      <Button onClick={()=>setCounter(counter-1)} variant="contained">-</Button>
      <Button onLoad={()=>setVariant(button3())} variant={variant}>-</Button>

    </>
  );
}
