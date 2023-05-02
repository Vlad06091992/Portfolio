import css from './Title.module.scss'

export const Title = (props) =>{
    return  <div className={css.wrapperTitle}>
        <h2 className={css.title}>{props.title}</h2>
    </div>

}