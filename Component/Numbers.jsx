import styles from '../styles/numbers.module.css'
export default function Numbers (props){
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".","C"]

    const generateNumbers = ()=>{
        return(
            <>
            {numbers.map(e=><div className={styles.numbers}> {e} </div>)}
           </>
        )
    }

    return (
        <>
         {generateNumbers()}
        </>
    )    
}