import css from './Main.module.css'
import React from 'react';



export const Main = () => {
    return (
        <div className={css.main}>
            <div className={css.container}>
                <div className={css.text}>
                    <h2>Hi, there</h2>
                    <p>My name Vladislav Smirnov</p>
                    <p>I am frontend developer</p>
                </div>
                <div className={css.photo}>photo</div>
            </div>
        </div>

    )
}