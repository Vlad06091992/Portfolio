import styles from './ContactForm/ContactForm.module.scss'
import React from 'react';
import {Title} from "../Title/Title";
import {ContactForm} from "./ContactForm/ContactForm";
import {MyContacts} from "./MyContacts/MyContacts";


export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <Title title={'Contacts'}/>
            <div className={styles.wrapper}>
                <MyContacts/>
                <ContactForm/>
            </div>
    </div>
    )
}