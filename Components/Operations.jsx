import { useEffect, useState } from 'react'
import styles from '../styles/operations.module.css'

const operations = ["-", "+", "/", "*", "%"]


export default function Operations (props){

    //const [controlOperations, setControlOperations]=useState(false)
    
    function addOperation (e){
        
        let input=e.target.attributes.value.value;

        if(input=="-" && props.stateView==""){
        props.setStateView(input)
        
        } else if (props.stateOperated==true) {
        props.setStateView(props.stateView+input)
        props.setStateOperated(false)
        props.setDotState("podeinserir") 
        }
        
   }
  

    const generateOperations = ()=>{
        return(
            <>
            {operations.map((e,i)=><div key={i} id={i} className={styles.operations} value={e}
            onClick={addOperation}> 
            {e} </div>)}
            </>
        )
    }

    useEffect(()=> {
        const increase=document.getElementById("1")
        increase.classList.add("doubleButtonIncrease")
        
        const multiplication=document.getElementById("3")
        multiplication.innerText="x"

    });
        

    return (
        <>
        {generateOperations()}
        {props.children}
        </>
    )     
}

