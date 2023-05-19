import styles from "../styles/buttondel.module.css";

export default function ButtonDel(props) {
  function erase() {
    if(props.stateView===0){
      return;
    } else {
    let stringStateView = props.stateView.toString()
    let lastViewDigitIsParenthesisOpen = stringStateView.endsWith("(")
    let lastViewDigitIsParenthesisClosed = stringStateView.endsWith(")")
    let lastViewDigitIsOperation = stringStateView.endsWith("+") ||
    stringStateView.endsWith("-") ||
    stringStateView.endsWith("*") ||
    stringStateView.endsWith("/")
    let lastViewDigitIsDot = stringStateView.endsWith(".")
    let lastViewDigitIsZero = stringStateView.endsWith("0")


    switch (true){
      case (lastViewDigitIsOperation===true):
        props.setStateOperated(true)
        props.setDotState("unabletoinsert")
        props.setAllowMultipleZeros("abletoinsert")
          if(stringStateView.length===1){props.setStateView(0)}
          else {props.setStateView(stringStateView.slice(0, stringStateView.length-1))}
        break;
      case(lastViewDigitIsParenthesisOpen===true):
        props.setParenthesesState("unabletoinsert)")
        if(stringStateView.length===1){props.setStateView(0)}
          else {props.setStateView(stringStateView.slice(0, stringStateView.length-1))}
        break;
      case(lastViewDigitIsParenthesisClosed===true):
        props.setParenthesesState("abletoinsert)")
        if(stringStateView.length===1){props.setStateView(0)}
          else {props.setStateView(stringStateView.slice(0, stringStateView.length-1))}
        break;
      case(lastViewDigitIsDot===true):
        props.setDotState("abletoinsert")
        props.setAllowMultipleZeros("unabletoinsert")
        if(stringStateView.length===1){props.setStateView(0)}
          else {props.setStateView(stringStateView.slice(0, stringStateView.length-1))}
        break;
      case(lastViewDigitIsZero===true):
        props.setStateOperated(false)
        if(stringStateView.length===1){props.setStateView(0)}
          else {props.setStateView(stringStateView.slice(0, stringStateView.length-1))}
        break;
      default:
        props.setStateOperated(false)
        props.setAllowMultipleZeros("unabletoinsert")
        if(stringStateView.length===1){props.setStateView(0)}
          else {props.setStateView(stringStateView.slice(0, stringStateView.length-1))}
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
