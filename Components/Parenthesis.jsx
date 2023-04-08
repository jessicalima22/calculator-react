import styles from '../styles/parenthesis.module.css'
export default function Parenthesis (props){

  function typedValue (e){
    let input=e.target.innerText;
    let stringStateView = props.stateView.toString()
    let lastViewDigitIsParenthesis = stringStateView.endsWith("(") || 
    stringStateView.endsWith(")")
    let containOperation = stringStateView.includes("+") ||
    stringStateView.includes("-") ||
    stringStateView.includes("*") ||
    stringStateView.includes("/")

    switch(true){
        case(lastViewDigitIsParenthesis === true):
          return;
          break;
        case(input==="(" && props.stateView===0):
          props.setStateView(input)
          props.setParenthesesState("abletoinsert)")
          break;
        case(input==="(" && props.parenthesesState==="unabletoinsert)"):
          props.setStateView(props.stateView+input)
          props.setParenthesesState("abletoinsert)")
          console.log(props.parenthesesState)
          break;
        case(input===")" && props.parenthesesState==="abletoinsert)" && props.stateOperated===true && containOperation===true):
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

    //não pode ter só um numero (mas pode ter só o menos), não pode ter operação imediatamente antes ou após o )
    //(9+4)/5-(9)+6(6) verificar onde está o ultimo (, editar uma string e verificar se tem operação
    
    
    }

    return(
        <div >
          <button className={styles.parenthesis} onClick={typedValue}>{props.signal}</button>
        </div>
    )
}