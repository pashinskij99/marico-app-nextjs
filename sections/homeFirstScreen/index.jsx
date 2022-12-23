import React from 'react'
import { ButtonDemo, ButtonGetStarted } from '../../components/buttons'
import { homeSubTitle, homeTitleH1First, homeTitleH1Second } from '../../constants'
import styles from './styles.module.scss'

const HomeFirstScreen = () => {
    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>
                        <span
                            className={styles.titleInner}
                            data-scroll
                            data-scroll-speed='1'
                            data-scroll-direction='horizontal'
                        >
                            {homeTitleH1First.map((span, i) => (
                                <span
                                    className={styles.titleSpanFirst}
                                    key={i}
                                >
                                    {span}
                                </span>
                            ))}
                        </span>

                        <br />
                        <span
                            className={styles.titleInner}
                            data-scroll
                            data-scroll-speed='-1'
                            data-scroll-direction='horizontal'
                        >
                            {homeTitleH1Second.map((span, i) => (
                                <span
                                    className={styles.titleSpanSeconds}
                                    key={i}
                                >
                                    {span}
                                </span>
                            ))}
                        </span>
                    </h1>
                    <p className={styles.subTitle}>{homeSubTitle}</p>
                    <div className={styles.getStartedButtons}>
                        <ButtonGetStarted className={styles.getStartedBtn} />
                        <ButtonDemo className={styles.demoBtn} />
                    </div>
                    <div className={styles.usersStarted}>
                        <span className={styles.usersStartedIcon}></span>
                        <span className={styles.amountUsers}>1000+</span>
                        <span className={styles.description}>creators have already started</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFirstScreen
