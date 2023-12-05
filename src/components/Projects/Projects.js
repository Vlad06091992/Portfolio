import css from './Projects.module.scss'
import React from 'react';
import {Project} from '../Project/Project'
import {Title} from "../../common/components/Title/Title";
import todolist from '../../assets/projects/todolist.png'
import todolistTest from '../../assets/projects/todolist-test.png'
import onlineShop from '../../assets/projects/online-shop.png'
import gitHunt from '../../assets/projects/git-hunt.png'
import Slide from "react-reveal/Slide";


let projectsProps = [
    {
        title: "Online shop",
        image: onlineShop,
        linkFrontend: 'https://github.com/Vlad06091992/online-shop-test-client',
        linkBackend: 'https://github.com/Vlad06091992/online-shop-test-server',
        linkToVercel: 'https://online-shop-test-client.vercel.app/',
        description: `Тестовое задание на позицию fullstack разработчика` ,
        figma:"https://www.figma.com/file/oWzPN2t2g0lmUG1jyTdYxL/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%2F-Fullstack-Web-Developer?node-id=0%3A1&mode=dev",
        technologies: ["Localstorage","Typescript","React", "Mobx","Tailwind CSS","Axios","React router dom V6","Express(back)","Vite","SCSS","Cors(Back)"],

    },
    {
        title: "Tasks manager",
        image: todolist,
        linkFrontend: 'https://github.com/Vlad06091992/ToDoLIst-react-typescript',
        linkToVercel: 'https://todo-cyan-alpha.vercel.app',
        description: "Проект для планирования задач, взаимодействует с внешним API",
        technologies: ["Typescript","React", "Redux Tool Kit","Axios", "Formik","React router dom V6","Storybook","Material ui"],

    },
    {
        title: "Git Hunt",
        image: gitHunt,
        linkFrontend: 'https://github.com/Vlad06091992/GitHunt',
        linkToVercel: 'https://git-hunt-phi.vercel.app',
        description: "Проект для поиска пользователей на Github",
        technologies: ["Typescript","Vue 3 composition API","Pinia","Vite","Axios","Element-plus","SCSS"],

    },
    {
        title: "Infinite Todolist",
        image: todolistTest,
        linkFrontend: 'https://github.com/Vlad06091992/test-assigment',
        linkToVercel: 'https://test-assigment-sand.vercel.app/',
        description: "Тестовое задание на позицию frontend разработчика. Представляет собой тудулист с бесконочной вложенностью подзадач для каждой задачи",
        technologies: ["Typescript","React","Mobx","Prettier","Localstorage","Material UI","SCSS"],
        figma: "https://www.figma.com/file/9ptzO19xMujbgo0YVG6KTB/%D1%82%D0%B5%D1%81%D1%82?type=design&node-id=0-1&t=SQIDI8pmIiJsGxfe-0"

    },

    // {
    //     title: "Social network",
    //     image: socialNetwork,
    //     link: 'https://github.com/Vlad06091992/SocialNetwork-react-typescript',
    //     linkToVercel: 'https://github.com/Vlad06091992/SocialNetwork-react-typescript',
    //     description: "",
    //     technologies: "",
    // },
    // {
    //     title: "Custom counter",
    //     image: counter,
    //     https: 'https://github.com/Vlad06091992/react-counter'
    // },
    // {
    //     title: "Pet projects native JS",
    //     image: petProjects,
    //     link: 'https://github.com/Vlad06091992/pet-projects-native-js'
    // },
]

export const Projects = () => {
    return (<div id={'projects'} className={css.projects}>
            <Title title={"My projects"}/>
            <Slide left>
                <div className={css.container}>
                    {projectsProps.map((el, index) => <Project key={el.title} {...el}/>)}
                </div>

            </Slide>
        </div>

    )
}

