import React from 'react';
import css from './Navigation.module.css'

export const Navigation = () => {
    return(
        <div className={css.navigation}>
            <a className={css.active}>Home</a>
            <a>Skills</a>
            <a>Projects</a>
            <a>Contacts</a>
        </div>
    )
}