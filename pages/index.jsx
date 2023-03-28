import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Parenthesis from "../Component/Parenthesis";
import Numbers from "../Component/Numbers";
import Operations from "../Component/Operations";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.containerUp}>
        <h1 className={styles.h1}>411.75</h1>
        <h2 className={styles.h2}>1000/400</h2>
        <h2 className={styles.h2}>2.5 + 7.25</h2>
        <h2 className={styles.h2}>9.75 + 402</h2>
      </div>

      <div className={styles.conteinerDown}>
        <div className={styles.conteinerParenthesis}>
          <Parenthesis className={styles.parenthesis} signal="(" />
          <Parenthesis className={styles.parenthesis} signal=")" />
        </div>
        <div className={styles.conteinerNumbers}>
          <Numbers />
        </div>
        <div className={styles.conteinerOperationsFirst}>
          <div className={styles.conteinerOperationsSecond}>
            <Operations /> 
          </div>
          <div className={styles.equalSign}> = </div>
        </div>
      </div>
    </div>
  );
}
