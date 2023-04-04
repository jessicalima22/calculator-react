import { useState } from 'react';
import styles from '../styles/numbers.module.css'
export default function Numbers (props){
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".","C"]

    const generateNumbers = ()=>{

      

        function typedValue (e){
            let input=e.target.innerText;
            let stringStateView = props.stateView.toString()
            let lastViewDigit = stringStateView.endsWith("+") || 
            stringStateView.endsWith("-") || 
            stringStateView.endsWith("/") || 
            stringStateView.endsWith("*") ||
            stringStateView.endsWith("%")

            if(props.stateView===0 && input!=="."){ 
                props.setStateView(input)
                props.setStateOperated(true)     
            } else if (input=="C"){
                props.setStateView(0)
                props.setStateOperated(false)
            } else if (input==="."  && props.dotState== "unabletoinsert"){
                return; 
            } else if (input==="." ){ if(lastViewDigit===true){
                return;
                } else {
                props.setStateView(props.stateView+input)
                props.setDotState("unabletoinsert")}  
            } else if (input!=="."){
                props.setStateView(props.stateView+input)
                props.setStateOperated(true)
            } else {
                console.log("cagou")
            }
       }

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
        

        switch (true){
            case (input==="C"):
                props.setStateView(0)
                props.setStateOperated(false)
                break;
            case (props.stateView===0 && input!=="."):
                props.setStateView(input)
                props.setStateOperated(true)
                break;
            case(input==="."  && props.dotState==="unabletoinsert"):
                return;
                break;
            case (input==="."):
                if(lastViewDigitIsOperator===true || lastViewDigitIsParenthesis===true){
                    return;
                } else {
                    props.setStateView(props.stateView+input)
                    props.setDotState("unabletoinsert")}
                break;
            case(input!=="."):
                props.setStateView(props.stateView+input)
                props.setStateOperated(true)
                break;
            default:
                props.setStateView("error!");
                break;
        }
   }


        
        return(
            <>
            {numbers.map((e,i)=><div className={styles.numbers} key={i+"n"} onClick={typedValueS}> {e} </div>)}
           </>
        )
    }

    return (
        <>
         {generateNumbers()}
        </>
    )    
}