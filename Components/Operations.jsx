import { useEffect } from 'react'
import styles from '../styles/operations.module.css'

const operations = ["-", "+", "/", "x", "%"]


export default function Operations (props){

    const generateOperations = ()=>{

        function testinho(props){
            
            console.log(props)
          }
        
        
        return(
            <>
            {operations.map((e,i)=><div key={i} id={i} className={styles.operations} 
            onClick={(e)=>props.setStateOperations(e.target.innerText)}> 
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

