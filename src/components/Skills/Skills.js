import classes from './Skills.module.css'
import React from 'react';
import {Skill} from '../Skill/Skill';
import css from '../../img/skills/css.svg'
import api from '../../img/skills/api.svg'
import js from '../../img/skills/js.svg'
import ts from '../../img/skills/ts.svg'
import redux from '../../img/skills/redux.svg'
import react from '../../img/skills/react.svg'
import {Title} from "../Title/Title";

let skillsProps = [{
    title: "React",
    decription: "Lorem ipsum",
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
    return (<div className={classes.skills}>
            <Title title={'My skills'}/>
            <div className={classes.container}>
                {skillsProps.map(el => {
                    return (<Skill title={el.title} description={el.decription} image={el.image}
                                   skillsList={el.skillsList}/>

                    )
                })}
            </div>
        </div>

    )
}