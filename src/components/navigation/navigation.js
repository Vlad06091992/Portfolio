import React from 'react';
import css from './Navigation.module.css'
import {Link} from 'react-scroll';

export const Navigation = () => {
    return (
        <div className={css.navigation}>
           <Link activeClass={css.active} to="skills" spy={true} smooth={true} offset={20} duration={500}
                         className={css.link}>
            Skills
        </Link>
            <Link activeClass={css.active} to="projects" spy={true} smooth={true} offset={20} duration={500}
                  className={css.link}>
                Projects
            </Link>
            {/*<Link activeClass={css.active} to="contacts" spy={true} smooth={true} offset={20} duration={500}*/}
            {/*      className={css.link}>*/}
            {/*    Contacts*/}
            {/*</Link>*/}
        </div>
    )
}
