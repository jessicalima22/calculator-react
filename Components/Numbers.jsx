import { useState } from 'react';
import styles from '../styles/numbers.module.css'
export default function Numbers (props){
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".","C"]

    const generateNumbers = ()=>{

      

        function typedValue (e){
           let input=e.target.innerText;
            let stringStateView = props.stateView.toString()
            let lastViewDigit = props.stateView.lenght

            if(props.stateView===0 && input!=="."){ 
                props.setStateView(input)
                props.setStateOperated(true)     
            } else if (input=="C"){
                props.setStateView("")
                props.setStateOperated(false)
            } else if (input==="."  && props.dotState== "nãoinserir"){
                console.log("deu") 
            } else if (input==="." ){
                props.setStateView(props.stateView+input)
                props.setDotState("nãoinserir");  
        
            } else if (input!=="."){
                props.setStateView(props.stateView+input)
                props.setStateOperated(true)
                console.log(lastViewDigit)
                console.log("erro")
            } else {
                console.log("cagou")
            }
       }

       function typedValueS (e){
        let input=e.target.innerText;

        switch (true){
            case (input === "." && props.setStateOperated(false) && props.stateView.includes(".")):
                return;
                break;
            case (input=="C"):
                props.setStateView("");
                props.setStateOperated(false);
                break;
            default:
                props.setStateView(props.stateView+input);
                props.setStateOperated(true);
                break;
        }
   }


        
        return(
            <>
            {numbers.map((e,i)=><div className={styles.numbers} key={i+"n"} onClick={typedValue}> {e} </div>)}
           </>
        )
    }

    return (
        <>
         {generateNumbers()}
        </>
    )    
}