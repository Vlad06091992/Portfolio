import React from 'react';
// import  LinkedIn  from "../../assets/socialMedia/linkedin.svg";
import  Github  from "../../assets/socialMedia/github.svg";
import Telegram  from "../../assets/socialMedia/telegram.svg";
import  Codewars from "../../assets/socialMedia/codewars.svg";
import  CV  from "../../assets/socialMedia/cv.svg";

import style from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={style.footer}>
            {/*<img src={LinkedIn} alt="LinkedIn" />*/}
            <img className={style.logo} src={Github} alt="LinkedIn" />
            <img className={style.logo} src={Telegram} alt="LinkedIn" />
            <img className={style.logo} src={CV} alt="LinkedIn" />
            <img className={style.logo} src={Codewars} alt="LinkedIn" />
        </div>
    );
}