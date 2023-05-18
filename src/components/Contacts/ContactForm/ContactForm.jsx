import styles from "./ContactForm.module.scss";
import React, {useState} from "react";

export const ContactForm = () => {
    let[name,setName] = useState('')
    let[email,setEmail] = useState('')
    let[message,setMessage] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        alert(`${name},${email},${message}`)
        setName('')
        setEmail('')
        setMessage('')
    }

    return(
        <div className={styles.contactMe}>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <p>Name</p>
                <input value={name}
                       placeholder='Write your name here'
                onChange={(e)=>{setName(e.target.value)}}
                />
                <p>Email</p>
                <input value={email}
                       placeholder='Write your email here'
                       onChange={(e)=>{setEmail(e.target.value)}}
                />
                <p>Message</p>
                <textarea value={message}
                          onChange={(e)=>{setMessage(e.target.value)}}/>
                <button>send message</button>
            </form>
        </div>
    )
}

