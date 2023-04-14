import { useState } from 'react';
import styles from '../styles/numbers.module.css'
export default function Numbers (props){
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".","C"]

    const generateNumbers = ()=>{

       function typedValueS (e){
            let input=e.target.innerText;
            let stringStateView = props.stateView.toString()
            let lastViewDigitIsOperator = stringStateView.endsWith("+") || 
            stringStateView.endsWith("-") || 
            stringStateView.endsWith("/") || 
            stringStateView.endsWith("*") ||
            stringStateView.endsWith("%")
            let lastViewDigitIsParenthesis = stringStateView.endsWith("(") || 
            stringStateView.endsWith(")")
            let lastViewDigitIsParenthesisClosed = stringStateView.endsWith(")")

            switch (true){
                case (input==="C"):
                    props.setStateResult(0)
                    props.setStateOperated(false)
                    props.setStateViewTwo(props.stateView)
                    props.setStateViewThree(props.stateViewTwo)
                    props.setStateView(0)
                    break;
                case (stringStateView.length>15):
                    return;
                    break;
                case (props.dotState==="unabletoinsert" && input===0):
                    return;
                    break;
                case (props.stateView===0 && input!=="."):
                    props.setStateView(input)
                    props.setStateOperated(true)
                    break;
                case(input==="." && props.dotState==="unabletoinsert"):
                    return;
                    break;
                case (input==="."):
                    if(lastViewDigitIsOperator===true || lastViewDigitIsParenthesis===true){
                        return;
                    } else {
                        props.setStateView(props.stateView+input)
                        props.setDotState("unabletoinsert")}
                    break;
                case(input!=="." && lastViewDigitIsParenthesisClosed===false):
                    props.setStateView(props.stateView+input)
                    props.setStateOperated(true)
                    break;
                default:
                    return;;
                    break;
            }
        }   
        
    return (
            <>
            {numbers.map((e,i)=><button className={styles.numbers} key={i+"n"} onClick={typedValueS}> {e} </button>)}
           </>
        )
    }

    return (
        <>
         {generateNumbers()}
        </>
    )    
}