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

  function typedValue (){
    setStateResult(eval(stateView))
}

  const [stateResult, setStateResult]=useState("411")
  const [stateView, setStateView]=useState("")
  


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
          <Parenthesis className={styles.parenthesis} signal="(" />
          <Parenthesis className={styles.parenthesis} signal=")" />
        </div>
        <div className={styles.conteinerNumbers}>
          <Numbers stateView={stateView} setStateView={setStateView}/>
        </div>
        <div className={styles.conteinerOperationsFirst}>
          <div className={styles.conteinerOperationsSecond}>
            <Operations stateView={stateView} setStateView={setStateView}/>
          </div>
          <div className={styles.equalSign} onClick={typedValue}> = </div>
        </div>
      </div>
    </div>
  );
}
