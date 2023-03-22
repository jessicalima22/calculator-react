import styles from '../styles/operations.module.css'
export default function Operations (){
    const operations = ["-", "/", "+", "x", " ", "%", "=", "="]

    const generateOperations = ()=>{
        return(
            <>
            {operations.map(e=><div className={styles.operations}> {e} </div>)}
           </>
        )
    }

    return (
        <>
         {generateOperations()}
        </>
    )    
}