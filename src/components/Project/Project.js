import styles from './Project.module.scss'
import React from 'react';
import {Button} from "../ui/button/Button";


export const Project = (props) => {

    return (
        <div className={styles.project}>
            <h3>{props.title}</h3>
            <div className={styles.linkButtons}>
                {props.linkToDeploy && <div>
                    <a target={'_blank'} href={props.linkToDeploy} rel="noreferrer">
                        <Button description={'Deployed Application'}></Button>
                    </a>
                </div>}
                {props.linkToDeployStorybook && <div>
                    <a target={'_blank'} href={props.linkToDeploy} rel="noreferrer">
                        <Button description={'Deployed storybook'}></Button>
                    </a>
                </div>}
                <div>
                    <a target={'_blank'} href={props.linkFrontend} rel="noreferrer">
                        <Button description={'Link to Github'}></Button>
                    </a>
                </div>
                {props.linkBackend && <div>
                    <a target={'_blank'} href={props.linkBackend} rel="noreferrer">
                        <Button description={'Link to Github(backend)'}></Button>
                    </a>
                </div>}
            </div>
            <div className={styles.main}>
                <div style={{width:'100%'}}>
                    <img alt={'project'} className={styles.image} src={props.image}></img>
                </div>
                <div>
                    <h3 className={styles.h3}>Библиотеки и инструменты</h3>
                    <ul>
                        {
                            props.technologies.sort((a, b) => a.localeCompare(b)).map(el => <li key={el}
                                                                                                className={styles.itemLi}>{el}</li>)
                        }
                    </ul>
                </div>
            </div>

            <div className={styles.description}>{props.description}</div>
            {props.figma && <div><a target={"_blank"} href={props.figma} rel="noreferrer">Ссылка на figma</a></div>}
            {props.swagger && <div><a target={"_blank"} href={props.swagger} rel="noreferrer">Ссылка на swagger</a></div>}
            {props.mySwaggerLink && <div><a target={"_blank"} href={props.mySwaggerLink} rel="noreferrer">Ссылка на swagger(реализованный мною backend)</a></div>}
            {props.linkToApi && <div><a target={"_blank"} href={props.linkToApi} rel="noreferrer">Ссылка на API(backend)</a></div>}
            {props.linkToTask && <div><a target={"_blank"} href={props.linkToTask} rel="noreferrer">Ссылка на задание(Github)</a></div>}
        </div>

    )
}




