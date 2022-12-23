import React from 'react'
import { homeExpertsAgreeList, homeExpertsAgreeTitleH2 } from '../../constants'
import styles from './styles.module.scss'

const ExpertsAgree = () => {
    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <h2 className={styles.title}>{homeExpertsAgreeTitleH2}</h2>

            <div className={styles.carousel}>
                {homeExpertsAgreeList.map((imgLink, i) => (
                    <img
                        className={styles.img}
                        key={i}
                        src={imgLink.src}
                        width={imgLink.width}
                        height={imgLink.height}
                        alt='img'
                    />
                ))}
            </div>
        </section>
    )
}

export default ExpertsAgree
