import css from './Projects.module.scss'
import React from 'react';
import {Project} from '../Project/Project'
import {Title} from "../../common/components/Title/Title";
import todolist from '../../assets/projects/todolist.png'
import todolistTest from '../../assets/projects/todolist-test.png'
import onlineShop from '../../assets/projects/online-shop.png'
import onlineShopTwo from '../../assets/projects/online-shop-2.png'
import gitHunt from '../../assets/projects/git-hunt.png'
import bloggers from '../../assets/projects/bloggers.png'
import inventory from '../../assets/projects/inventory.png'
import minicut from '../../assets/projects/minicut.png'
import storybook from '../../assets/projects/storybook.png'
import petProjects from '../../assets/projects/pet_projects.png'
import Slide from "react-reveal/Slide";


let projectsProps = [
    {
        title: "Online shop",
        image: onlineShop,
        linkFrontend: 'https://github.com/Vlad06091992/online-shop-test-client',
        linkBackend: 'https://github.com/Vlad06091992/online-shop-test-server',
        linkToDeploy: 'https://online-shop-test-client.vercel.app/',
        description: `Тестовое задание на позицию fullstack разработчика`,
        figma: "https://www.figma.com/file/oWzPN2t2g0lmUG1jyTdYxL/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%2F-Fullstack-Web-Developer?node-id=0%3A1&mode=dev",
        technologies: ["Localstorage", "Typescript", "React", "Mobx", "Tailwind CSS", "Axios", "React router dom V6", "Express(Backend)", "Vite", "SCSS", "Cors(Backend)"],
    },
    {
        title: "Git Hunt",
        image: gitHunt,
        linkFrontend: 'https://github.com/Vlad06091992/GitHunt',
        linkToDeploy: 'https://git-hunt-phi.vercel.app',
        description: "Проект для поиска пользователей на Github",
        technologies: ["Typescript", "Vue 3 composition API", "Pinia", "Vite", "Axios", "Element-plus", "SCSS"],

    },
    {
        title: "Online shop",
        image: onlineShopTwo,
        linkToTask: "https://github.com/ITCase/react-test-task/tree/middle",
        linkFrontend: 'https://github.com/Vlad06091992/ITCase_test_task_react',
        linkToDeploy: 'https://it-case-test-task-react.vercel.app',
        description: "Тестовое задание на позицию middle frontend разработчика. Мини интернет магазин",
        technologies: ["Typescript", "React", "Mobx", "React router dom V6",'UUID',"React-toastify","SCSS"],

    },
    {
        title: "Tasks manager",
        image: todolist,
        linkFrontend: 'https://github.com/Vlad06091992/ToDoLIst-react-typescript',
        linkToDeploy: 'https://todo-cyan-alpha.vercel.app',
        description: "Проект для планирования задач, взаимодействует с внешним API",
        technologies: ["Typescript", "React", "Redux Tool Kit", "Axios", "Formik", "React router dom V6", "Storybook", "Material UI", "UUID"],

    },
    {
        title: "Flashcards/UI Kit",
        image: storybook,
        linkFrontend: 'https://github.com/Vlad06091992/flashcards',
        linkToDeploy: 'https://flashcards-nwweb3age-vlad06091992.vercel.app/?path=/story',
        description: "Проект с карточками для запоминания новой информации(в разработке). В настоящий момент мною пишется собственный UI kit на основе Radix UI, делаются компоненты форм на основе React Hook Form",
        technologies: ["Typescript", "React", "React router dom V6", "Radix UI", , "Prettier", "ES-Lint", "React hook form", "ZOD", "Redux tool kit Query", "Storybook",],
        figma: 'https://www.figma.com/file/PwHkQjA62wyw8BSEyW4gIk/%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B0%D0%BC?node-id=2-2378&t=FtEn06M2W26xiUEx-0'
    },
    {
        title: "Infinite Todolist",
        image: todolistTest,
        linkFrontend: 'https://github.com/Vlad06091992/test-assigment',
        linkToDeploy: 'https://test-assigment-sand.vercel.app/',
        description: "Тестовое задание на позицию frontend разработчика. Представляет собой тудулист с бесконочной вложенностью подзадач для каждой задачи",
        technologies: ["Typescript", "React", "Mobx", "Prettier", "Localstorage", "Material UI", "SCSS"],
        figma: "https://www.figma.com/file/9ptzO19xMujbgo0YVG6KTB/%D1%82%D0%B5%D1%81%D1%82?type=design&node-id=0-1&t=SQIDI8pmIiJsGxfe-0"

    },
    {
        title: "Inventory of items",
        image: inventory,
        linkFrontend: 'https://github.com/Vlad06091992/vue-test-task',
        linkToDeploy: 'https://vue-test-task-i7jpavxi7-vlad06091992.vercel.app',
        description: "Тестовое задание на позицию frontend разработчика. Представляет собой инвентарь с предметами, с возможность перетаскивания(drag and drop без сторонних библиотек), удаления. Также есть меню с подробной информацией",
        technologies: ["Typescript", "Vue 3 composition API", "Pinia", "Vite", "Localstorage", "SCSS"],
        figma: "https://www.figma.com/file/ziQM2VcgY1D7UnX937cSEO/Vue-Test-Task?node-id=0%3A1&mode=dev"
    },
    {
        title: "Minicut Craft Pro",
        image: minicut,
        linkFrontend: 'https://github.com/Vlad06091992/Minicut_Craft_Pro',
        linkToDeploy: 'https://vlad06091992.github.io/Minicut_Craft_Pro/',
        description: "Небольшое карманное приложение для компании 'Mиникат'. Позволяет быстро подобрать необходимые шлифовальные круги для производства осевого инструмента. Данные хранятся в Localstorage",
        technologies: ["Typescript", "React", "React router dom V6", "Material UI", "Localstorage", "Prettier", "UUID",],
    },
    {
        title: "Bloggers Platform API",
        image: bloggers,
        linkFrontend: 'https://github.com/Vlad06091992/bloggers-platform-api',
        linkToDeploy: 'https://bloggers-platform-api.vercel.app/',
        description: "Backend приложение, разрабатываемое мною в целях изучения новых знаний и технологий. В настоящее время реализовано несколько роутов(блоги,посты,видео), используется 'Mondo DB Atlas' для хранения данных, базовая авторизация, написаны e2e тесты для роутов. Проект на этапе разработки",
        technologies: ["Typescript", "Express","Express-validator","Express basic auth","MongoDB","Super test","Dotenv","jest","nodemon",],
    },
    {
        title: "Pet projects native JS",
        image: petProjects,
        linkFrontend: 'https://github.com/Vlad06091992/pet-projects-native-js',
        description: "Репозиторий с пет проектами на чистом JS+HTML+CSS",
        technologies: ["Javascript","HTML","CSS","Fetch"]
    },
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

