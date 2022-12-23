import React from 'react'
import { LastSectionLogo, lastSectionSubTitle, lastSectionTitle } from '../../constants'
import styles from './styles.module.scss'

const GetStartedNow = () => {
    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <LastSectionLogo className={styles.logo} />
            <h2 className={styles.title}>{lastSectionTitle}</h2>
            <p className={styles.subTitle}>{lastSectionSubTitle}</p>

            <button className={styles.getStartedBtn}>Get Started Now</button>

            <div className={styles.usersStarted}>
                <span className={styles.usersStartedIcon}></span>
                <span className={styles.amountUsers}>1000+</span>
                <span className={styles.description}>creators have already started</span>
            </div>
        </section>
    )
}

export default GetStartedNow
