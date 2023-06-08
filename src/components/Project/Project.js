import styles from './Project.module.scss'
import React from 'react';


export const Project = (props) => {

    const src = props.image

    return (
        <div className={styles.project}>
            <a target={'_blank'} href={props.link}>
                <button className={styles.button}>view</button>
            </a>
            {/*<img className={css.image} src={`..${src}`}></img>*/}
            <img className={styles.image} src={src}></img>
            <h3>{props.title}</h3>
            <div className={styles.description}>{props.description}</div>
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
//             <div style={props.style } className={css.logo}><button>view</button></div>
//             <h3>{props.title}</h3>
//             <div className={css.description}>{props.description}</div>
//         </div>
//
//     )
// }


