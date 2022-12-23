import React from 'react'
import styles from '../step.module.scss'
import {
    homeWhyLoveStep3TitleH2,
    homeWhyLoveStep3SubTitleH2,
    homeWhyLoveStep3TitleH3,
    btnsHomeText,
    homeWhyLoveStep3ImageLink,
    homeWhyLoveStep3ListOfBenefits,
    homeWhyLoveStep3TitleLinkH3,
    homeWhyLoveStep3SubTitleH3,
} from '../../../constants'
import clsx from 'clsx'

const Step3 = () => {
    return (
        <section
            data-scroll-section
            className={clsx(styles.wrapper, styles.step3)}
        >
            <div className={clsx('container', styles.container)}>
                <div className={styles.wrapperStepTitle}>
                    <span className={styles.subTitle}>STEP 3</span>
                    <h2 className={styles.h2}>{homeWhyLoveStep3TitleH2}</h2>
                    <p className={styles.paragraph}>{homeWhyLoveStep3SubTitleH2}</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <span className={styles.subTitle}>{homeWhyLoveStep3SubTitleH3}</span>
                        <h2 className={styles.h2}>
                            {homeWhyLoveStep3TitleH3}{' '}
                            <a
                                href='#'
                                className={styles.titleLink}
                            >
                                {homeWhyLoveStep3TitleLinkH3}
                            </a>
                        </h2>
                        <ul className={styles.list}>
                            {homeWhyLoveStep3ListOfBenefits.map(({ description, id }, i) => (
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
                        <div className={styles.cube}></div>
                        <img
                            src={homeWhyLoveStep3ImageLink.src}
                            width={homeWhyLoveStep3ImageLink.width}
                            height={homeWhyLoveStep3ImageLink.height}
                            alt=''
                        />
                    </div>
                </div>

                {/* <button className={styles.btnGetStarted}>Get Started</button> */}
            </div>
        </section>
    )
}

export default Step3
