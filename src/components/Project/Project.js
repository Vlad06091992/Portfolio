import styles from './Project.module.scss'
import React from 'react';
import {Button} from "../ui/button/Button";


export const Project = (props) => {

    return (
        <div className={styles.project}>
            <h3>{props.title}</h3>
            <div className={styles.linkButtons}>
            <div>
                <a target={'_blank'} href={props.linkToVercel}>
                    <Button description={'Link to vercel'}></Button>
                </a>
            </div>
            <div>
                <a target={'_blank'} href={props.linkFrontend}>
                    <Button description={'Link to Github'}></Button>
                </a>
            </div>
                {props.linkBackend && <div>
                    <a target={'_blank'} href={props.linkBackend}>
                        <Button description={'Link to Github(backend)'}></Button>
                    </a>
                </div>}
            </div>
            <div className={styles.main}>
                <div>
                    <img alt={'image'} className={styles.image} src={props.image}></img>
                </div>
                <div>
                    <h3 className={styles.h3}>Библиотеки и инструменты</h3>
                    <ul>
                        {
                            props.technologies.sort((a, b) => a.localeCompare(b)).map(el => <li
                                className={styles.itemLi}>{el}</li>)
                        }
                    </ul>
                </div>
            </div>

            <div className={styles.description}>{props.description}</div>
            {props.figma &&    <a target={"_blank"} href={props.figma}>Ссылка на figma</a>}
        </div>

    )
}


// import css from './Project.module.scss'
// import React from 'react';
//
//
//
// export const Project = (props) => {
//     return (
//         <div className={css.job}>
//             <div style={props.style } className={css.logo}><Button.jsx>view</Button.jsx></div>
//             <h3>{props.title}</h3>
//             <div className={css.description}>{props.description}</div>
//         </div>
//
//     )
// }


