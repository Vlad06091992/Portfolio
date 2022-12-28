import css from './Jobs.module.css'
import React from 'react';
import { Skill } from '../Skill/Skill';
import {Job} from '../Job/Job'

let jobsProps = [{title:"Social network", decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae laudantium nesciunt error ab fugiat dolores, odit vero aperiam fugit?"}
,{title:"Todolist", decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis earum at dolores ipsa, nesciunt consectetur et in, blanditiis reprehenderit commodi voluptatibus! Quis dignissimos molestiae reiciendis sed incidunt pariatur quas quidem dicta facilis, explicabo rerum nesciunt amet possimus quibusdam esse odio. Eos velit quia, natus culpa impedit beatae exercitationem quod magnam molestiae possimus odit molestias provident ipsa expedita in minus earum eum dignissimos assumenda? Ratione blanditiis non voluptas pariatur magnam?"},
{title:"Custom counter", decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis non id iste quos explicabo repudiandae, recusandae eum deserunt quasi, veritatis labore nihil officia autem eos impedit eligendi. Voluptate quod deserunt delectus reprehenderit odit adipisci vitae, aliquam repudiandae magni in tempore libero officiis quos eveniet!"},
{title:"Pet projects native JS", decription:"Lorem ipsum dolor sit amet consectetur"},
{title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas totam quis similique obcaecati, odit incidunt?", decription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sunt iusto nemo? Quam, alias? Cumque consequatur illo, placeat similique aliquam quis! Praesentium accusantium quis culpa possimus ex eum fuga harum provident cupiditate nobis non deleniti animi amet dignissimos officiis sequi veritatis unde nostrum ipsum veniam, ipsa, nisi earum! Voluptatum, nesciunt! Aspernatur dolorum tempora explicabo reprehenderit?"}]

export const Jobs = () => {
    return (
        <div className={css.jobs}>
            <h2>My jobs</h2>
            <div className={css.container}>
                {jobsProps.map(el=>{
                    return(
                        <Job title={el.title} description={el.decription}/>

                    )
                })}
            </div>
        </div>

    )
}