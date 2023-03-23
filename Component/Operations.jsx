import { useEffect } from 'react'
import styles from '../styles/operations.module.css'

const operations = ["-", "+", " ", "/", "x", "%", "="]

    const generateOperations = ()=>{
        return(
            <>
            {operations.map((e,i)=><div key={i} id={i} className={styles.operations}> {e} </div>)}
           </>
        )
    }

    


export default function Operations (){
    
    useEffect(()=> {
        const increase=document.getElementById("1")
        increase.classList.add("doubleButtonIncrease")

        const equal=document.getElementById("6")
        equal.classList.add("doubleButtonEqual")

    });
        

    return (
        <>
         {generateOperations()}
        </>
    )    
}

