import React from 'react'
import { homeExpertsAgreeHelpers, homeExpertsAgreeHelpersTitleH2 } from '../../constants'
import styles from './styles.module.scss'

const Helpers = () => {
    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <h3>{homeExpertsAgreeHelpersTitleH2}</h3>
            <div className={styles.wrapperHelpersIcons}>
                <div
                    data-scroll
                    data-scroll-speed='1'
                    data-scroll-direction='horizontal'
                    className={styles.listIcons}
                >
                    {homeExpertsAgreeHelpers.map((Icon) => (
                        <Icon className={styles.icon} />
                    ))}
                </div>
                <div
                    data-scroll
                    data-scroll-speed='-1'
                    data-scroll-direction='horizontal'
                    className={styles.listIcons}
                >
                    {homeExpertsAgreeHelpers.map((Icon) => (
                        <Icon className={styles.icon} />
                    ))}
                </div>
                <div
                    data-scroll
                    data-scroll-speed='1'
                    data-scroll-direction='horizontal'
                    className={styles.listIcons}
                >
                    {homeExpertsAgreeHelpers.map((Icon) => (
                        <Icon className={styles.icon} />
                    ))}
                </div>
                <div
                    data-scroll
                    data-scroll-speed='-1'
                    data-scroll-direction='horizontal'
                    className={styles.listIcons}
                >
                    {homeExpertsAgreeHelpers.map((Icon) => (
                        <Icon className={styles.icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Helpers
