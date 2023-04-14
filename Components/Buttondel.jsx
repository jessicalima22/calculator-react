import styles from "../styles/buttondel.module.css";

export default function ButtonDel(props) {
  function erase() {
    if(props.stateView==0){
      return;
    } else {
    props.setStateView(props.stateView.substring(0, props.stateView.length-1))}
  }
  return (
    <div>
      <button className={styles.buttondel} onClick={erase}>
        {props.signal}
      </button>
    </div>
  );
}
