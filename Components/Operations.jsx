import { useEffect } from 'react'
import styles from '../styles/operations.module.css'

const operations = ["-", "+", "/", "x", "%"]


export default function Operations (props){

    const generateOperations = ()=>{

       function typedValue (e){
            let input=e.target.innerText;
            props.setStateOperations(props.stateOperations+input)
            console.log(props.stateOperations)
       }
        
        
        return(
            <>
            {operations.map((e,i)=><div key={i} id={i} className={styles.operations} 
            onClick={typedValue}> 
            {e} </div>)}
            </>
        )
    }

    useEffect(()=> {
        const increase=document.getElementById("1")
        increase.classList.add("doubleButtonIncrease")
        


    });
        

    return (
        <>
         {generateOperations()}
            {props.children}
        </>
    )     
}

