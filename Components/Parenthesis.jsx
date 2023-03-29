import styles from '../styles/parenthesis.module.css'
export default function Parenthesis (props){
    return(
        <div >
          <button className={styles.parenthesis}>{props.signal}</button>
        </div>
    )
}