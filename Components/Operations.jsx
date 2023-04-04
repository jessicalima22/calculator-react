import { useEffect, useState } from 'react'
import styles from '../styles/operations.module.css'

const operations = ["-", "+", "/", "*", "%"]


export default function Operations (props){

    //const [controlOperations, setControlOperations]=useState(false)
    
    function addOperation (e){
        
        let input=e.target.attributes.value.value;
        let stringStateView = props.stateView.toString()
        let lastViewDigitIsDot = stringStateView.endsWith(".")

        if (input=="-" && props.stateView===0){
            props.setStateView(input)
        } else if (lastViewDigitIsDot===false && props.stateOperated==true) {
            props.setStateView(props.stateView+input)
            props.setStateOperated(false)
            props.setDotState("abletoinsert") 
        } else {
            return;
        }
    }

   function addOperationS (e){
        
    let input=e.target.attributes.value.value;
    let stringStateView = props.stateView.toString()
    let lastViewDigitIsDot = stringStateView.endsWith(".")

        switch(true){
            case(input==="-" && props.stateView==""):
                props.setStateView(input)
                break;
            case(lastViewDigitIsDot===false && props.stateOperated==true):

                if(input==="%"){
                    props.setStateResult(props.stateView/100)
                    props.setStateView(0)
                } else {props.setStateView(props.stateView+input)
                    props.setStateOperated(false)
                    props.setDotState("abletoinsert")}
                break;
            default:
                return;
                break;
            }   
    }
  

    const generateOperations = ()=>{
        return(
            <>
            {operations.map((e,i)=><div key={i} id={i} className={styles.operations} value={e}
            onClick={addOperationS}> 
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

