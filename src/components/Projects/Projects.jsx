import css from './Projects.module.scss'
import React, {useState} from 'react';
import {Project} from '../Project/Project'
import {Title} from "../../common/components/Title/Title";
import Slide from "react-reveal/Slide";
import flashcards from "../../assets/projects/flashcards.png";
import onlyTestTask from "../../assets/projects/only-test-task.png";
import onlineShop from "../../assets/projects/online-shop.png";
import gitHunt from "../../assets/projects/git-hunt.png";
import onlineShopTwo from "../../assets/projects/online-shop-2.png";
import todolist from "../../assets/projects/todolist.png";
import todolistTest from "../../assets/projects/todolist-test.png";
import inventory from "../../assets/projects/inventory.png";
import minicut from "../../assets/projects/minicut.png";
import bloggers from "../../assets/projects/bloggers.png";
import petProjects from "../../assets/projects/pet_projects.png";
import calendar from "../../assets/projects/calendar.png";
import personageFinder from "../../assets/projects/personage-finder.png";
import {DebounceInput} from "../Debounced-input/DebouncedInput";
import {useMediaQuery} from 'react-responsive';

const projects = [
    {
        type: ['frontend'],
        title: "Flashcards/UI Kit",
        image: flashcards,
        linkFrontend: 'https://github.com/Vlad06091992/flashcards',
        linkToDeploy: 'https://flashcards-eight-xi.vercel.app',
        swagger: 'https://api.flashcards.andrii.es/docs',
        linkToDeployStorybook: 'https://storybook-my-flashcards-example-project.vercel.app',
        description: "Проект с карточками для запоминания новой информации(в разработке). В настоящий момент мною разработан собственный UI kit на основе Radix UI (в том числе на основе полиморфных компонентов), полный флоу авторизации,логинизации(JWT tokens), восстановление пароля,отображение карточек. Используется swagger для информации о бэкенд части приложения",
        technologies: ["Typescript", "React", "React router dom V6", "Radix UI", , "Prettier", "ES-Lint", "React hook form", "ZOD", "Redux tool kit Query", "Storybook", "Swagger", "JWT tokens(refresh,access)", "Vite"],
        figma: 'https://www.figma.com/file/PwHkQjA62wyw8BSEyW4gIk/%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B0%D0%BC?node-id=2-2378&t=FtEn06M2W26xiUEx-0'
    },
    {
        type: ['frontend'],
        title: "World Chronicle",
        image: onlyTestTask,
        linkFrontend: 'https://github.com/Vlad06091992/test-task-only',
        linkToDeploy: 'https://test-task-only-five.vercel.app',
        description: `Тестовое задание на позицию middle-frontend разработчика, представляет собой приложение, которое показывает историю о событиях в мире(технологии, космос, кино и т.д.). Реализована десктопная и мобильная(320px) версия в соответствии с макетом. 
        Задание примечательно тем, что нашлось практическое применение хукам useLayoutEffect, useRef для работы с анимациями, используются кастомные кнопки и стили для Swiper`,
        figma: "https://www.figma.com/file/YXCbNT4Jf9INk62BKTZw1z/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?mode=dev",
        technologies: ["Typescript", "React","GSAP","Motion frame","Swiper","React responsive","SCSS","Webpack"],
    },
    {
        type: ['fullstack', 'frontend', 'backend'],
        title: "Online shop",
        image: onlineShop,
        linkFrontend: 'https://github.com/Vlad06091992/online-shop-test-client',
        linkBackend: 'https://github.com/Vlad06091992/online-shop-test-server',
        linkToDeploy: 'https://online-shop-test-client.vercel.app/',
        mySwaggerLink: 'https://online-shop-test-server.vercel.app/docs',
        description: `Тестовое задание на позицию fullstack разработчика, мною реализована фронтенд и бэкенд часть согласно техзаданию`,
        figma: "https://www.figma.com/file/oWzPN2t2g0lmUG1jyTdYxL/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%2F-Fullstack-Web-Developer?node-id=0%3A1&mode=dev",
        technologies: ["Localstorage", "Typescript", "React", "Mobx", "Tailwind CSS", "Axios", "React router dom V6", "Express(Backend)", "Vite", "SCSS", "Cors(Backend)","Swagger"],
    },
    {
        type: ['frontend','native'],
        title: "Event calendar",
        image: calendar,
        linkFrontend: 'https://github.com/Vlad06091992/test-task-geography-turs',
        linkToDeploy: 'https://vlad06091992.github.io/test-task-geography-turs/',
        description: `Тестовое задание на позицию middle-frontend разработчика, необходимо реализовать календарь с возможностью добавления и поиска событий по дате, автору, или названию события. Важное условие - не использовать никаких js,css библиотек`,
        technologies: ["HTML","CSS","JS"],
        linkToTaskFile: "https://cloud.mail.ru/public/aUfm/H7r1FS6fs"
    },
    {
        type: ['frontend'],
        title: "Personage finder",
        image: personageFinder,
        linkFrontend: 'https://github.com/Vlad06091992/test-task-lotus',
        linkToDeploy: 'https://test-task-lotus-x89a.vercel.app/',
        description: `Тестовое задание на позицию junior-frontend разработчика, необходимо реализовать небольшое приложение для поиска персонажа с помощью API swapi dev. Основное требование к заданию - реализовать приложение на классовых компонентах React`,
        linkToTask: "https://github.com/Lotus-uems-front/tz_lotus",
        technologies: ["React","Axios","Typescript","React class components"],

    },
    {
        type: ['frontend'],
        title: "Git Hunt",
        image: gitHunt,
        linkFrontend: 'https://github.com/Vlad06091992/GitHunt',
        linkToDeploy: 'https://git-hunt-phi.vercel.app',
        description: "Проект для поиска пользователей на Github",
        technologies: ["Typescript", "Vue 3 composition API", "Pinia", "Vite", "Axios", "Element-plus", "SCSS"],

    },
    {
        type: ['frontend'],
        title: "shop",
        image: onlineShopTwo,
        linkToTask: "https://github.com/ITCase/react-test-task/tree/middle",
        linkFrontend: 'https://github.com/Vlad06091992/ITCase_test_task_react',
        linkToDeploy: 'https://it-case-test-task-react.vercel.app',
        description: "Тестовое задание на позицию middle frontend разработчика. Мини интернет магазин",
        technologies: ["Typescript", "React", "Mobx", "React router dom V6", 'UUID', "React-toastify", "SCSS"],

    },
    {
        type: ['frontend'],
        title: "Tasks manager",
        image: todolist,
        linkFrontend: 'https://github.com/Vlad06091992/ToDoLIst-react-typescript',
        linkToApi: 'https://social-network.samuraijs.com/docs?type=todolist#auth',
        linkToDeploy: 'https://todo-cyan-alpha.vercel.app',
        description: "Проект для планирования задач, взаимодействует с внешним API",
        technologies: ["Typescript", "React", "Redux Tool Kit", "Axios", "Formik", "React router dom V6", "Storybook", "Material UI", "UUID"],

    },
    {
        type: ['frontend'],
        title: "Infinite Todolist",
        image: todolistTest,
        linkFrontend: 'https://github.com/Vlad06091992/test-assigment',
        linkToDeploy: 'https://test-assigment-sand.vercel.app/',
        description: "Тестовое задание на позицию frontend разработчика. Представляет собой тудулист с бесконочной вложенностью подзадач для каждой задачи",
        technologies: ["Typescript", "React", "Mobx", "Prettier", "Localstorage", "Material UI", "SCSS"],
        figma: "https://www.figma.com/file/9ptzO19xMujbgo0YVG6KTB/%D1%82%D0%B5%D1%81%D1%82?type=design&node-id=0-1&t=SQIDI8pmIiJsGxfe-0"

    },
    {
        type: ['frontend'],
        title: "Inventory of items",
        image: inventory,
        linkFrontend: 'https://github.com/Vlad06091992/vue-test-task',
        linkToDeploy: 'https://vue-test-task-seven.vercel.app/',
        description: "Тестовое задание на позицию frontend разработчика. Представляет собой инвентарь с предметами, с возможность перетаскивания(drag and drop без сторонних библиотек), удаления. Также есть меню с подробной информацией",
        technologies: ["Typescript", "Vue 3 composition API", "Pinia", "Vite", "Localstorage", "SCSS"],
        figma: "https://www.figma.com/file/ziQM2VcgY1D7UnX937cSEO/Vue-Test-Task?node-id=0%3A1&mode=dev"
    },
    {
        type: ['frontend'],
        title: "Minicut Craft Pro",
        image: minicut,
        linkFrontend: 'https://github.com/Vlad06091992/Minicut_Craft_Pro',
        linkToDeploy: 'https://vlad06091992.github.io/Minicut_Craft_Pro/',
        description: "Небольшое карманное приложение для компании 'Mиникат'. Позволяет быстро подобрать необходимые шлифовальные круги для производства осевого инструмента. Данные хранятся в Localstorage",
        technologies: ["Typescript", "React", "React router dom V6", "Material UI", "Localstorage", "Prettier", "UUID",],
    },
    {
        type: ['backend'],
        title: "Bloggers Platform API",
        image: bloggers,
        mySwaggerLink: 'https://bloggers-platform-api.vercel.app/docs/',
        linkFrontend: 'https://github.com/Vlad06091992/bloggers-platform-api',
        linkToDeploy: 'https://bloggers-platform-api.vercel.app/',
        description: "Backend приложение, разрабатываемое мною в целях изучения новых знаний и технологий. В настоящее время реализовано несколько роутов(блоги,посты,видео), используется 'Mondo DB Atlas' для хранения данных, базовая авторизация, написаны e2e тесты для роутов. Проект на этапе разработки",
        technologies: ["Typescript", "Express", "Express-validator", "Express basic auth", "MongoDB", "Super test", "Dotenv", "Jest", "Nodemon","Swagger"],
    },
    {
        type: ['native'],
        title: "Pet projects native JS",
        image: petProjects,
        linkFrontend: 'https://github.com/Vlad06091992/pet-projects-native-js',
        description: "Репозиторий с пет проектами на чистом JS+HTML+CSS",
        technologies: ["Javascript", "HTML", "CSS", "Fetch"]
    },
]

export const Projects = () => {
    const [projectsState, setProjectsState] = useState(projects)
    const [inputValue, setInputValue] = React.useState("");

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    console.log(isDesktopOrLaptop)

    let findedItems = projectsState.filter(el =>
        el.technologies.some(t => t.toLowerCase().includes(inputValue.toLowerCase()))
    ).map((el) => <Project key={el.title} {...el}/>);
    return (<div id={'projects'} className={css.projects}>
            <Title title={"My projects"}/>
            <div className={css.searchSettings}>
                <span>Выберите направление </span> <select className={css.select} onChange={event => {
                setInputValue('')
                event.target.value === 'all' ? setProjectsState(projects) :
                    setProjectsState(projects.filter(el => el.type.includes(event.target.value)))
            }}>
                <option value={'all'}>All</option>
                <option value={'frontend'}>Frontend</option>
                <option value={'backend'}>Backend</option>
                <option value={'fullstack'}>Fullstack</option>
                <option value={'native'}>Native JS</option>
            </select>
                <DebounceInput value={inputValue} className={css.input} placeholder={'Введите технологию'}
                                   onChange={setInputValue}/>
            </div>
            <div className={css.container}>
                    {!findedItems.length &&
                        <div className={css.notFoundResult}>К сожалению проекты с такими параметрами не нашлись
                            :(</div>}
                    {findedItems}
                </div>
        </div>
    )
}

