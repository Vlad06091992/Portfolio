import React from 'react';
import css from './Navigation.module.css'

export const Navigation = () => {
    return(
        <div className={css.navigation}>
            <a>Главная</a>
            <a>Скилы</a>
            <a>Работы</a>
            <a>Контакты</a>
        </div>
    )
}