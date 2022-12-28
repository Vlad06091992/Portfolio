import css from './Skill.module.css'
import React from 'react';



export const Skill = (props) => {
    return (
        <div className={css.skill}>
            <div className={css.logo}></div>
            <h3>{props.title}</h3>
            <div className={css.description}>{props.description}</div>
        </div>

    )
}