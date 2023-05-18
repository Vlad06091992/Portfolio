import styles from "../ContactForm/ContactForm.module.scss";
import React from "react";

export const MyContacts = () => {

    return (<div className={styles.myContacts}>
            <ul>
                <li><a href="tel:89623163431" target="_blank">
                    +7-962-316-3431
                </a>
                </li>
                <li><a href="mailto:Smirnov.ru92@mail.ru" target="_blank">Smirnov.ru92@mail.ru</a></li>
                <li>
                    <a href="https://t.me/Vlad_VS92" target="_blank">
                        Telegram
                    </a>
                </li>
            </ul>
        </div>

    )
}