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
            let lastViewDigitIsParenthesisOpen = stringStateView.endsWith("(")

            switch (true){
                case (input==="C"):
                    props.setStateResult(0)
                    props.setStateOperated(false)
                    props.setStateViewTwo(props.stateView)
                    props.setStateViewThree(props.stateViewTwo)
                    props.setStateView(0)
                    break;
                case (stringStateView.length>15):
                    alert("Maximum digits exceeded! =,[")
                    break;
                case (props.stateView===0 && input!=="." && input!=="0"):
                    props.setStateView(input)
                    props.setStateOperated(true)
                    props.setAllowMultipleZeros("abletoinsert")
                    break;
                case (input==="0"):
                    if(props.stateView===0){
                        props.setStateView(input)
                        props.setStateOperated(true)
                    } else if (props.allowMultipleZeros==="abletoinsert" || lastViewDigitIsOperator===true || lastViewDigitIsParenthesisOpen===true){
                        props.setStateView(props.stateView+input)
                        props.setStateOperated(true)
                    } 
                    break;
                case(input==="." && props.dotState==="unabletoinsert"):
                    return;
                    break;
                case (input==="."):
                    if(lastViewDigitIsOperator===true || lastViewDigitIsParenthesis===true){
                        return;
                    } else {
                        props.setStateView(props.stateView+input)
                        props.setDotState("unabletoinsert")
                        props.setAllowMultipleZeros("abletoinsert")}
                    break;
                case(input!=="." && input!=="0"):
                    if(props.stateView===0){
                        props.setStateView(input)
                        props.setStateOperated(true)
                        props.setAllowMultipleZeros("abletoinsert")
                    } else if(lastViewDigitIsParenthesisClosed===false){
                    props.setStateView(props.stateView+input)
                    props.setStateOperated(true)
                    props.setAllowMultipleZeros("abletoinsert")
                    }
                    break;
                default:
                    return;
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
//60002+0.00003