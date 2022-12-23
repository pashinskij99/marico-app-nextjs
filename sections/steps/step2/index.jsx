import React from 'react'
import styles from '../step.module.scss'
import { homeWhyLoveStep2TitleH2, homeWhyLoveStep2SubTitleH2, homeWhyLoveStep2Cards } from '../../../constants'
import clsx from 'clsx'

const Step2 = () => {
    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <div className={clsx('container', styles.container)}>
                <div className={styles.wrapperStepTitle}>
                    <span className={styles.subTitle}>STEP 2</span>
                    <h2 className={styles.h2}>{homeWhyLoveStep2TitleH2}</h2>
                    <p className={styles.paragraph}>{homeWhyLoveStep2SubTitleH2}</p>
                </div>

                <ul className={styles.cards}>
                    {homeWhyLoveStep2Cards.map(({ id, Image, subTitle, title: { first, second } }) => (
                        <li
                            key={id}
                            className={styles.card}
                        >
                            <span>{subTitle}</span>
                            <h3>
                                {first} <br /> <span>{second}</span>
                            </h3>
                            <Image className={styles.svg} />
                        </li>
                    ))}
                </ul>

                <button className={styles.btnGetStarted}>Get Started</button>
            </div>
        </section>
    )
}

export default Step2
