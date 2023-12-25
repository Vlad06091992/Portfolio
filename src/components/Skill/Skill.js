import css from './Skill.module.scss'
import React from 'react';



export const Skill = (props) => {
    // debugger
    return (
        <div className={css.skill}>
            <img className={css.image} src={props.image}/>
            <h3>{props.title}</h3>
            {/*<div className={css.description}>{props.description}</div>*/}
        <ul>{props.skillsList.map(el => <li key={el}>{el}</li>) }</ul>
        </div>

    )
}