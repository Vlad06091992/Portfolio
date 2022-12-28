import css from './Contacts.module.css'
import React from 'react';




export const Contacts = () => {
    return (
        <div className={css.contacts}>
            <h2>Contacts</h2>
            <div className={css.container}>
                <form className={css.form}>
                    <input placeholder='first input' />
                    <input placeholder='second input' />
                    <textarea placeholder='this is textarea' />
                <button>Send</button>
                </form>
            </div>
        </div>

    )
}