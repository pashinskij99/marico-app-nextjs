import React from 'react'
import styles from '../step.module.scss'
import {
    homeWhyLoveStep1TitleH2,
    homeWhyLoveStep1SubTitleH2,
    homeWhyLoveStep1ButtonText,
    homeWhyLoveStep1SubTitleH3,
    homeWhyLoveStep1TitleH3,
    homeWhyLoveStep1ListOfBenefits,
    homeWhyLoveStep1TitleLinkH3,
    btnsHomeText,
    homeWhyLoveStep1ImageLink,
} from '../../../constants'
import {motion} from 'framer-motion'
import clsx from 'clsx'

const Step1 = () => {
    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <div className={clsx('container', styles.container)}>
                <div className={styles.wrapperStepTitle}>
                    <span className={styles.subTitle}>STEP 1</span>
                    <h2 className={styles.h2}>{homeWhyLoveStep1TitleH2}</h2>
                    <p className={styles.paragraph}>{homeWhyLoveStep1SubTitleH2}</p>
                    <button className={styles.titleBtn}>{homeWhyLoveStep1ButtonText}</button>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={styles.content}
                >
                    <div className={styles.description}>
                        <span className={styles.subTitle}>{homeWhyLoveStep1SubTitleH3}</span>
                        <h2 className={styles.h2}>
                            {homeWhyLoveStep1TitleH3}{' '}
                            <a
                                href='#'
                                className={styles.titleLink}
                            >
                                {homeWhyLoveStep1TitleLinkH3}
                            </a>
                        </h2>
                        <ul className={styles.list}>
                            {homeWhyLoveStep1ListOfBenefits.map(({ description, id }, i) => (
                                <li
                                    key={id}
                                    className={styles.listItem}
                                >
                                    <span className={styles.numberLine}>{i + 1}</span>
                                    <span className={styles.listItemDescription}>{description}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.btnsWrapper}>
                            <button className={styles.btnGetStarted}>{btnsHomeText[0]}</button>
                            <button className={styles.viewDemo}>{btnsHomeText[1]}</button>
                        </div>
                    </div>
                    <div className={styles.picture}>
                        <div
                            data-scroll
                            data-scroll-speed='3'
                            data-scroll-direction='vertical'
                            className={styles.cube}
                        ></div>
                        <img
                            src={homeWhyLoveStep1ImageLink.src}
                            width={homeWhyLoveStep1ImageLink.width}
                            height={homeWhyLoveStep1ImageLink.height}
                            alt=''
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Step1
