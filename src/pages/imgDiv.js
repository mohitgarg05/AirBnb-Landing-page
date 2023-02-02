import React from 'react'
import style from '../styles/imgdiv.module.css';


const imgDiv = (props) => {
  return (
    <>
        <div className={style.wrap}>
            <div className={style.imgFlex}>
                <img loading='lazy' src={props.image}></img>
            </div>
            <div className={style.disDiv}>
                <h5>"{props.discript}"</h5>
                <p className={style.p1}>{props.head},</p><p>{props.head2}</p>
            </div>
        </div>
    </>
  )
}

export default imgDiv