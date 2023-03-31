import { useEffect } from 'react'
import styles from '../styles/operations.module.css'

const operations = ["-", "+", "/", "x", "%"]


export default function Operations (props){
    
    function typedValue (e){
        let input=e.target.value;
        props.setStateView(props.stateView+input)
        props.setStateOperated(false)
   }

    const generateOperations = ()=>{
        return(
            <>
            {operations.map((e,i)=><div key={i} id={i} className={styles.operations} value={e}
            onClick={typedValue}> 
            {e} </div>)}
            </>
        )
    }

    useEffect(()=> {
        const increase=document.getElementById("1")
        increase.classList.add("doubleButtonIncrease")
        
        const multiplication=document.getElementById("3")
        multiplication.value="*"

    });
        

    return (
        <>
         {generateOperations()}
            {props.children}
        </>
    )     
}

