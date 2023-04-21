import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Parenthesis from "../Components/Parenthesis";
import Numbers from "../Components/Numbers";
import Operations from "../Components/Operations";
import Result from "../Components/Result";
import View from "../Components/View";
import ButtonDel from "../Components/Buttondel";
  
export default function Home() {

  const [stateResult, setStateResult]=useState(0)
  const [stateView, setStateView]=useState(0)
  const [stateViewTwo, setStateViewTwo]=useState("")
  const [stateViewThree, setStateViewThree]=useState("")
  const [stateOperated, setStateOperated]=useState(false)
  const [dotState, setDotState]=useState("abletoinsert")
  const [parenthesesState, setParenthesesState]=useState("unabletoinsert)")
  const [allowMultipleZeros, setAllowMultipleZeros]=useState("unabletoinsert")

  let stringStateResult = stateResult.toString();
  let numberOfDigitsResult = stringStateResult.length;

  
  function equal (){
    let stringStateView = stateView.toString()
    let lastViewDigitIsOperator = stringStateView.endsWith("+") || 
    stringStateView.endsWith("-") || 
    stringStateView.endsWith("/") || 
    stringStateView.endsWith("*")
    setDotState("abletoinsert")

    if(lastViewDigitIsOperator === true){
      return;
    } else {  
      let lineResult = eval(stateView)
           
        setStateResult(lineResult)
        setStateViewTwo(stateView)
        setStateViewThree(stateViewTwo)
        setStateView(eval(stateView))
    }  
  }

  useEffect(()=>{
    let h1 = document.getElementById("h1");
      if(numberOfDigitsResult >= 7){
        h1.classList.add("h1two")
      } else {
        h1.classList.remove("h1two")
      } 
  }, [stateResult])

  return (
    <div className={styles.background}>
      <div className={styles.containerUp}>
        <Result stateResult={stateResult} setStateResult={setStateResult} 
        stateView={stateView} setStateView={setStateView}/>
        <View view={stateView}></View>
        <View>{stateViewTwo}</View>
        <View>{stateViewThree}</View>
      </div>

      <div className={styles.conteinerDown}>
        <div className={styles.conteinerParenthesis}>
          <Parenthesis parenthesesState={parenthesesState} setParenthesesState={setParenthesesState} 
          stateOperated={stateOperated} setStateOperated={setStateOperated} 
          stateView={stateView} setStateView={setStateView} 
           signal="(" />

          <Parenthesis parenthesesState={parenthesesState} setParenthesesState={setParenthesesState} 
          stateOperated={stateOperated} setStateOperated={setStateOperated} 
          stateView={stateView} setStateView={setStateView} 
           signal=")" />

          <ButtonDel signal="Del"
          stateView={stateView} setStateView={setStateView} />
        </div>
        <div className={styles.conteinerNumbers}>
          <Numbers stateViewThree={stateViewThree} setStateViewThree={setStateViewThree} 
          stateViewTwo={stateViewTwo} setStateViewTwo={setStateViewTwo} 
          stateResult={stateResult} setStateResult={setStateResult} 
          dotState={dotState} setDotState={setDotState} 
          stateView={stateView} setStateView={setStateView} 
          stateOperated={stateOperated} setStateOperated={setStateOperated}
          allowMultipleZeros={allowMultipleZeros} setAllowMultipleZeros={setAllowMultipleZeros}/>
        </div>
        <div className={styles.conteinerOperationsFirst}>
          <div className={styles.conteinerOperationsSecond}>
            <Operations dotState={dotState} setDotState={setDotState} 
            stateView={stateView} setStateView={setStateView} 
            stateOperated={stateOperated} setStateOperated={setStateOperated} 
            stateResult={stateResult} setStateResult={setStateResult}
            allowMultipleZeros={allowMultipleZeros} setAllowMultipleZeros={setAllowMultipleZeros} />
          </div>
          <div className={styles.equalSign} onClick={equal}> = </div>
        </div>
      </div>
    </div>
  );
}



