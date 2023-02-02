import React from 'react'
import style from '../styles/imgdiv.module.css';

const card = (props) => {
  return (
    <div className={style.cardWrapper}>
      <div className={style.cardImg}>
        <img loading='lazy' src={props.image}></img>
      </div>
      <h2>{props.heading}</h2>
      <p>{props.para}</p>
    </div>
  )
}

export default card