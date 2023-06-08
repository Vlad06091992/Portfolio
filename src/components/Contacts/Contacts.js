import styles from './Contacts.module.scss'
import React from 'react';
import {Title} from "../../common/components/Title/Title";
import {ContactForm} from "./ContactForm/ContactForm";
import {MyContacts} from "./MyContacts/MyContacts";


export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <Title title={'Contacts'}/>
            <div className={styles.container}>
                <MyContacts/>
                <ContactForm/>
            </div>
    </div>
    )
}