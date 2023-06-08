import css from './Projects.module.scss'
import React from 'react';
import {Project} from '../Project/Project'
import {Title} from "../../common/components/Title/Title";
import petProjects from '../../assets/projects/pet_projects.png'
import counter from '../../assets/projects/counter.png'
import socialNetwork from '../../assets/projects/social_network.jpg'
import todolist from '../../assets/projects/todolist.webp'


let projectsProps = [{
    title: "Social network",
    image: socialNetwork,
    link: 'https://github.com/Vlad06091992/SocialNetwork-react-typescript'
}, {
    title: "Todolist",
    image: todolist,
    link: 'https://github.com/Vlad06091992/ToDoLIst-react-typescript'

}, {
    title: "Custom counter",
    image: counter,
    https:'https://github.com/Vlad06091992/react-counter'
}, {
    title: "Pet projects native JS",
    image: petProjects,
    link:'https://github.com/Vlad06091992/pet-projects-native-js'
},]

export const Projects = () => {
    return (<div className={css.projects}>
            <Title title={"My projects"}/>
            <div className={css.container}>
                {projectsProps.map((el, index) => {
                    return (<Project key={index} image={el.image} title={el.title} description={el.decription}
                                     link={el.link}/>

                    )
                })}
            </div>
        </div>

    )
}

