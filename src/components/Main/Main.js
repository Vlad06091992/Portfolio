import css from './Main.module.scss'
import React from 'react';
import photo from '../../assets/photo.jpg'



export const Main = () => {
    return (
        <div className={css.main}>
            <div className={css.container}>
               <div className={css.ava}>
                   <img  alt='ava' src={photo} />

               </div>

                <div className={css.text}>
                    <h2>Hello There, I'm</h2>
                    <div className={css.name}>
                        <div>Vladislav</div>
                        <div className={css.lastname}>Smirnov</div>
                    </div>
                    <p>computer programmer, who loves to code in JS</p>
                </div>
            </div>
        </div>

    )
}