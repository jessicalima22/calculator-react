import { useEffect } from 'react'
import styles from '../styles/operations.module.css'

const operations = ["-", "+", "/", "x", "%"]





    


export default function Operations ({ children }){

    const generateOperations = ()=>{

        function testinho(e){
            console.log(e.target.firstChild.wholeText)
          }
        
        
        return(
            <>
            {operations.map((e,i)=><div key={i} id={i} className={styles.operations} onClick={testinho}> {e} </div>)}
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
            {children}
        </>
    )     
}

