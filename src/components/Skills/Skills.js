import styles from './Skills.module.scss'
import React from 'react';
import {Skill} from '../Skill/Skill';
import css from '../../img/skills/css.svg'
import api from '../../img/skills/api.svg'
import js from '../../img/skills/js.svg'
import ts from '../../img/skills/ts.svg'
import redux from '../../img/skills/redux.svg'
import react from '../../img/skills/react.svg'
import {Title} from "../../common/components/Title/Title";
import Slide from "react-reveal/Slide";
let skillsProps = [{
    title: "React",
    description: "Lorem ipsum",
    image: react,
    skillsList: ['Function components', 'Class components', 'HOC', 'React router DOM', 'Hooks']
}, {
    title: "JS",
    decription: " dolores!",
    image: js,
    skillsList: ['ECMAScript 6', 'DOM', 'Closure', 'Promise', 'Event loop']
}, {title: "REST API",
    decription: " dolores!",
    image: api, skillsList: ['HTTP', 'CRUD', 'AXIOS']},
    {
    title: "REDUX",
        decription: " dolores!",
        image: redux,
        skillsList: ['RTK', 'Thunk', 'FLUX']
}, {
    title: "HTML/CSS",
    decription: " quos eveniet!",
    image: css,
    skillsList: ['Semantics', 'Adaptive', 'Flexbox/Grid', 'BEM', 'SASS']
}, {
    title: "TS",
    decription: "Lorem ipsum dolor sit amet consectetur",
    image: ts,
    skillsList: ['generics', 'interface', 'type']
}]

export const Skills = () => {
    return (<div id={'skills'} className={styles.skills}>
            <Title title={'My skills'}/>
            <Slide right>
            <div className={styles.container}>
                {skillsProps.map(el => {
                    return (<Skill title={el.title} description={el.description} image={el.image}
                                   skillsList={el.skillsList}/>

                    )
                })}
            </div>
            </Slide>
        </div>

    )
}