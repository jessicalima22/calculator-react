import styles from '../styles/parenthesis.module.css'
export default function Parenthesis (props){

  function typedValue (e){
    let input=e.target.innerText;

    props.setStateView(props.stateView+input)
    
    }

    return(
        <div >
          <button className={styles.parenthesis} onClick={typedValue}>{props.signal}</button>
        </div>
    )
}