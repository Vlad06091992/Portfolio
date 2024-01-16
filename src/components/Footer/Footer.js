import React from 'react';
// import  LinkedIn  from "../../assets/socialMedia/linkedin.svg";
import {ReactComponent as Github} from "../../assets/socialMedia/github.svg";
import {ReactComponent as Telegram} from "../../assets/socialMedia/telegram.svg";
import {ReactComponent as Codewars} from "../../assets/socialMedia/codewars.svg";
import {ReactComponent as CV} from "../../assets/socialMedia/cv.svg";
import {ReactComponent as Linkedin} from "../../assets/socialMedia/linkedin.svg";

import style from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <a target={'_blank'} href={'https://github.com/Vlad06091992'}>
                <Github className={style.logo}/>
            </a>
            <a target={'_blank'} href={'https://t.me/Vlad_VS92'}>
                <Telegram className={style.logo}/>
            </a>
            <a target={'_blank'} href={'https://www.codewars.com/users/Vlad06091992'}>
                <Codewars className={style.logo}/>
            </a>
            <a target={'_blank'} href={'https://cloud.mail.ru/public/Q7FK/3RY9cqAvy'}>
                <CV className={style.logo}/>
            </a>

            <p className={style.name}>Vladislav Smirnov</p>
        </div>

    );
}