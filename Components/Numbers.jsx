import styles from '../styles/numbers.module.css'
export default function Numbers (props){
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".","C"]

    const generateNumbers = ()=>{

        function typedValue (e){
            let input=e.target.innerText;
            props.setStateView(props.stateView+input)
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