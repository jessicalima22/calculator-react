import styles from '../styles/parenthesis.module.css'
export default function Parenthesis (props){

  function typedValue (e){
    let input=e.target.innerText;
    let stringStateView = props.stateView.toString()
    let lastViewDigitIsParenthesis = stringStateView.endsWith("(") || 
    stringStateView.endsWith(")")
    let lastViewDigitIsOperation = stringStateView.endsWith("+") ||
    stringStateView.endsWith("-") ||
    stringStateView.endsWith("*") ||
    stringStateView.endsWith("/")

    switch(true){
      
        case(lastViewDigitIsParenthesis === true):
          return;
          break;
        case (stringStateView.length>15):
          alert("Maximum digits exceeded! =,[")
          break;
        case(input==="(" && props.stateView===0):
          props.setStateView(input)
          props.setParenthesesState("abletoinsert)")
          break;
        case(input==="(" && props.parenthesesState==="unabletoinsert)" && lastViewDigitIsOperation === true):
          props.setStateView(props.stateView+input)
          props.setParenthesesState("abletoinsert)")
          break;
        case(input===")" && props.parenthesesState==="abletoinsert)" && props.stateOperated===true /*&& containOperation===true*/):
          props.setStateView(props.stateView+input)
          props.setParenthesesState("unabletoinsert)")
          break;
        case(input===")" && props.parenthesesState==="unabletoinsert)" || input==")" && props.stateOperated===false || input==")" && containOperation===false):
          return;
          break;
        default:
          return;
          break;
    }
  }

  return (
      <div >
        <button className={styles.parenthesis} onClick={typedValue}>{props.signal}</button>
      </div>
  )
}