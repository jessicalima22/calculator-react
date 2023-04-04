import styles from '../styles/parenthesis.module.css'
export default function Parenthesis (props){

  function typedValue (e){
    let input=e.target.innerText;
    let stringStateView = props.stateView.toString()
    let lastViewDigitIsParenthesis = stringStateView.endsWith("(") || 
    stringStateView.endsWith(")")

    switch(true){
        case(lastViewDigitIsParenthesis === true):
          return;
          break;
        case(input=="(" && props.stateView===0):
          props.setStateView(input)
          props.setParenthesesState("abletoinsert)")
          break;
        case(input=="("):
          props.setStateView(props.stateView+input)
          props.setParenthesesState("abletoinsert)")
          console.log("caiu aqui")
          console.log(props.parenthesesState)
          break;
        case(input==")" && props.parenthesesState==="abletoinsert)"):
          props.setStateView(props.stateView+input)
          props.setParenthesesState("unabletoinsert)")
          break;
        case(input==")" && props.parenthesesState==="unabletoinsert)"):
          return;
          break;
        default:
          props.setStateView("ERROR!")
          break;
    }

    //não pode ter só um numero, não pode ter operação imediatamente antes ou após o )
    
    
    
    }

    return(
        <div >
          <button className={styles.parenthesis} onClick={typedValue}>{props.signal}</button>
        </div>
    )
}