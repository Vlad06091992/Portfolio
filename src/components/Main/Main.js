import css from './Main.module.scss'
import React from 'react';
import photo from '../../assets/photo.jpg'
import {Particle} from "../../common/components/Particle/Particle";
import Slide from "react-reveal/Slide";
import {ReactComponent as Github} from "../../assets/socialMedia/github.svg";
import {ReactComponent as Telegram} from "../../assets/socialMedia/telegram.svg";
import {ReactComponent as Codewars} from "../../assets/socialMedia/codewars.svg";
import {ReactComponent as CV} from "../../assets/socialMedia/cv.svg";
import ReactTypingEffect from 'react-typing-effect';


export const Main = () => {
    return (
        <div className={css.main}>
            <Particle/>
            <Slide>
                <div className={css.container}>
                    <div className={css.ava}>
                        <img alt='ava' src={photo}/>

                    </div>

                    <div className={css.text}>
                        <h2>Hello There, I'm</h2>
                        <div className={css.name}>
                            <div>Vladislav</div>
                            <div className={css.lastname}>Smirnov</div>
                        </div>
                        <p>A programmer who loves coding in <ReactTypingEffect speed={100}
                                                                               text={["React", "Javascript", "Typescript"]}/>
                        </p>
                        <div className={css.socialMedia}>
                            <div className={css.stripe}></div>
                            <a target={'_blank'} href={'https://github.com/Vlad06091992'}>
                                <Github className={css.logo}/>
                            </a>
                            <a target={'_blank'} href={'https://t.me/Vlad_VS92'}>
                                <Telegram className={css.logo}/>
                            </a>
                            <a target={'_blank'} href={'https://www.codewars.com/users/Vlad06091992'}>
                                <Codewars className={css.logo}/>
                            </a>
                            <a target={'_blank'} href={'https://cloud.mail.ru/public/Q7FK/3RY9cqAvy'}>
                                <CV className={css.logo}/>
                            </a>

                        </div>
                    </div>
                </div>

            </Slide>
        </div>

    )
}