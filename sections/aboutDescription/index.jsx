import clsx from 'clsx'
import React from 'react'
import {
    aboutDescriptionLogo,
    aboutDescriptionParagraph,
    aboutDescriptionSubTitle,
    aboutDescriptionText,
    aboutDescriptionTitle,
} from '../../constants'
import styles from './styles.module.scss'

const AboutDescription = () => {
    const Logo = aboutDescriptionLogo[0]
    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <div className={clsx('containerAbout', styles.container)}>
                <div className={styles.logo}>
                    <Logo className={styles.logoIcon} />
                    <span>{aboutDescriptionLogo[1]}</span>
                </div>

                <div className={styles.titleAbout}>
                    <span className={styles.subTitle}>{aboutDescriptionSubTitle}</span>
                    <h2 className={styles.title}>{aboutDescriptionTitle}</h2>
                    <p className={styles.paragraph}>{aboutDescriptionParagraph}</p>
                </div>

                <div className={styles.description}>{aboutDescriptionText}</div>

                <hr />
            </div>
        </section>
    )
}

export default AboutDescription
