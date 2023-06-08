import React from 'react';
import {Navigation} from '../navigation/navigation';
import css from './Header.module.scss'


export const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.container}>
                <Navigation/>
            </div>
        </div>
    )
}