import css from './Project.module.css'
import React from 'react';



export const Project = (props) => {

    const src = props.image
    // debugger

    return (
        <div className={css.project}>
            <button className={css.button}>view</button>



            {/*<img className={css.image} src={`..${src}`}></img>*/}
            <img className={css.image} src={src}></img>
            <h3>{props.title}</h3>
            <div className={css.description}>{props.description}</div>
        </div>

    )
}


// import css from './Project.module.css'
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


