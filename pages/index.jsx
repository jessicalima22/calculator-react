import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Parenthesis from "../Components/Parenthesis";
import Numbers from "../Components/Numbers";
import Operations from "../Components/Operations";
import Result from "../Components/Result";
import View from "../Components/View";

export default function Home() {

  function equal (){
    setStateResult(eval(stateView))
    
}

  const [stateResult, setStateResult]=useState("")
  const [stateView, setStateView]=useState(0)
  const [stateOperated, setStateOperated]=useState(false)
  const [dotState, setDotState]=useState("abletoinsert")
  const [parenthesesState, setParenthesesState]=useState("unabletoinsert)")


  return (
    <div className={styles.background}>
      <div className={styles.containerUp}>
        <Result stateResult={stateResult} setStateResult={setStateResult} 
        stateView={stateView} setStateView={setStateView}/>
        <View view={stateView}></View>
        <View>2.5 + 7.25</View>
        <View>9.75 + 402</View>
      </div>

      <div className={styles.conteinerDown}>
        <div className={styles.conteinerParenthesis}>
          <Parenthesis parenthesesState={parenthesesState} setParenthesesState={setParenthesesState} stateView={stateView} setStateView={setStateView} className={styles.parenthesis} signal="(" />
          <Parenthesis parenthesesState={parenthesesState} setParenthesesState={setParenthesesState} stateView={stateView} setStateView={setStateView} className={styles.parenthesis} signal=")" />
        </div>
        <div className={styles.conteinerNumbers}>
          <Numbers dotState={dotState} setDotState={setDotState} stateView={stateView} setStateView={setStateView} stateOperated={stateOperated} setStateOperated={setStateOperated}/>
        </div>
        <div className={styles.conteinerOperationsFirst}>
          <div className={styles.conteinerOperationsSecond}>
            <Operations dotState={dotState} setDotState={setDotState} stateView={stateView} setStateView={setStateView} stateOperated={stateOperated} setStateOperated={setStateOperated} stateResult={stateResult} setStateResult={setStateResult} />
          </div>
          <div className={styles.equalSign} onClick={equal}> = </div>
        </div>
      </div>
    </div>
  );
}
