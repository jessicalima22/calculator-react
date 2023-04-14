import styles from "../styles/buttondel.module.css";

export default function ButtonDel(props) {
  function erase() {
    props.setStateView(props.stateView.substring(0, props.stateView.length-1))
  }
  return (
    <div>
      <button className={styles.buttondel} onClick={erase}>
        {props.signal}
      </button>
    </div>
  );
}
