import css from './Skills.module.css'
import React from 'react';
import { Skill } from '../Skill/Skill';

let skillsProps = [{title:"React", decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae laudantium nesciunt error ab fugiat dolores, odit vero aperiam fugit?"}
,{title:"JS", decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sequi a optio. Aliquam, ipsa recusandae? Cum rem in pariatur incidunt non corrupti aut! Illo sed facere ducimus, quod voluptates natus voluptatum laudantium quisquam dolores!"},
{title:"CSS", decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis non id iste quos explicabo repudiandae, recusandae eum deserunt quasi, veritatis labore nihil officia autem eos impedit eligendi. Voluptate quod deserunt delectus reprehenderit odit adipisci vitae, aliquam repudiandae magni in tempore libero officiis quos eveniet!"},
{title:"TS", decription:"Lorem ipsum dolor sit amet consectetur"}]

export const Skills = () => {
    return (
        <div className={css.skills}>
            <h2>My skills</h2>
            <div className={css.container}>
                {skillsProps.map(el=>{
                    return(
                        <Skill title={el.title} description={el.decription}/>

                    )
                })}
            </div>
        </div>

    )
}