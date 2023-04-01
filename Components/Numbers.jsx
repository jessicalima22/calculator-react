import styles from '../styles/numbers.module.css'
export default function Numbers (props){
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".","C"]

    const generateNumbers = ()=>{

        function typedValue (e){
            let input=e.target.innerText;

            if(input=="." && props.stateOperated==false){
            
            } else if (input=="C"){
            props.setStateView("")
            props.setStateOperated(false)
            } else {
            props.setStateView(props.stateView+input)
            props.setStateOperated(true)
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