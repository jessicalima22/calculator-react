import styles from "../styles/buttondel.module.css";

export default function ButtonDel(props) {
  function erase() {
    if(props.stateView==0){
      return;
    } else {
    let stringStateView = props.stateView.toString()
    let lastViewDigitIsParenthesis = stringStateView.endsWith("(") || 
    stringStateView.endsWith(")")
    let lastViewDigitIsOperation = stringStateView.endsWith("+") ||
    stringStateView.endsWith("-") ||
    stringStateView.endsWith("*") ||
    stringStateView.endsWith("/")

    switch (true){
      case (lastViewDigitIsOperation===true):
        props.setStateOperated(true)
        props.setDotState("unabletoinsert")
        props.setAllowMultipleZeros("abletoinsert")
        props.setStateView(stringStateView.slice(0, stringStateView.length-1))
        break;
      case(lastViewDigitIsParenthesis===true):
      
        props.setStateView(stringStateView.slice(0, stringStateView.length-1))
        break;
      case()
    }



    if(lastViewDigitIsOperation===true){
      props.setStateOperated(true)
      props.setDotState("unabletoinsert")
      props.setAllowMultipleZeros("abletoinsert")
      props.setStateView(stringStateView.slice(0, stringStateView.length-1))
    } else if(lastViewDigitIsParenthesis===true){

      props.setStateView(stringStateView.slice(0, stringStateView.length-1))
    } else {
      props.setStateView(stringStateView.slice(0, stringStateView.length-1))
    }
    }

      
  }
  return (
    <div>
      <button className={styles.buttondel} onClick={erase}>
        {props.signal}
      </button>
    </div>
  );
}
