import { useEffect, useState } from 'react'
import styles from '../styles/operations.module.css'

const operations = ["-", "+", "/", "*", "%"]


export default function Operations (props){

   function addOperationS (e){
        
    let input=e.target.attributes.value.value;
    let stringStateView = props.stateView.toString()
    let lastViewDigitIsDot = stringStateView.endsWith(".")
    let lastViewDigitIsParentheses = stringStateView.endsWith("(") || 
    stringStateView.endsWith(")")
    let lastViewDigitIsParenthesisOpen = stringStateView.endsWith("(")

        switch(true){
            
            case(input==="-" && props.stateView===0):
                props.setStateView(input)
                break;
            case (stringStateView.length>15):
                alert("Maximum digits exceeded! =,[")
                break;
            case(lastViewDigitIsDot===false && props.stateOperated===true && lastViewDigitIsParenthesisOpen===false):
                if(input==="%"){
                    props.setStateResult(eval(props.stateView)/100)
                    props.setStateView(eval(props.stateView)/100)
                } else {props.setStateView(props.stateView+input)
                    props.setStateOperated(false)
                    props.setDotState("abletoinsert")
                    props.setAllowMultipleZeros("unabletoinsert")}
                break;
            case(lastViewDigitIsParentheses===true && input!=="-"):
                return;
                break;
            case(lastViewDigitIsParentheses===true && input==="-"):
                props.setStateView(props.stateView+input)
                props.setStateOperated(false)
                props.setDotState("abletoinsert")
                props.setAllowMultipleZeros("abletoinsert")
                break;
            default:
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

