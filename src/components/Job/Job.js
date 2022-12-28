import css from './Job.module.css'
import React from 'react';



export const Job = (props) => {
    return (
        <div className={css.job}>
            <div className={css.logo}><button>view</button></div>
            <h3>{props.title}</h3>
            <div className={css.description}>{props.description}</div>
        </div>

    )
}