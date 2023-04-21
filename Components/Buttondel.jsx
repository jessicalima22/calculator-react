import styles from "../styles/buttondel.module.css";

export default function ButtonDel(props) {
  function erase() {
    if(props.stateView==0){
      return;
    } else {
    let stateViewString=props.stateView.toString()
    props.setStateView(stateViewString.slice(0, stateViewString.length-1))}
  }
  return (
    <div>
      <button className={styles.buttondel} onClick={erase}>
        {props.signal}
      </button>
    </div>
  );
}
