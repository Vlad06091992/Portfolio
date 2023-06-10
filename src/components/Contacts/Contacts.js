import styles from './Contacts.module.scss'
import React from 'react';
import {Title} from "../../common/components/Title/Title";
import {ContactForm} from "./ContactForm/ContactForm";
import {MyContacts} from "./MyContacts/MyContacts";
import Swing from "react-reveal/Swing";


export const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.contacts}>
            <Title title={'Contacts'}/>
            <div className={styles.container}>
                <MyContacts/>
                <ContactForm/>
            </div>
        </div>
    )
}