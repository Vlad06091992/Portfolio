import css from './Projects.module.scss'
import React from 'react';
import {Project} from '../Project/Project'
import {Title} from "../Title/Title";
import petProjects from '../../assets/projects/pet_projects.png'
import counter  from '../../assets/projects/counter.png'
import socialNetwork from '../../assets/projects/social_network.jpg'
import todolist from '../../assets/projects/todolist.webp'



let jobsProps = [{
    title: "Social network",
   image:socialNetwork
}, {
    title: "Todolist",
    image:todolist

}, {
    title: "Custom counter",
    image: counter
}, {title: "Pet projects native JS",
   image: petProjects
},]

export const Projects = () => {
    return (<div className={css.projects}>
            <Title title={"My projects"}/>
            <div className={css.container}>
                {jobsProps.map(el => {
                    return (<Project image={el.image} title={el.title} description={el.decription}/>

                    )
                })}
            </div>
        </div>

    )
}

