import React from 'react'
import { aboutOurTeamList, aboutOurTeamSubTitle, aboutOurTeamTitle } from '../../constants'
import styles from './styles.module.scss'
import ArrowIcon from '../../assets/icons/arrowRotate120.svg'
import clsx from 'clsx'

const OurTeam = () => {
    return (
        <section
            className={styles.wrapper}
            data-scroll-section
        >
            <div className={clsx('containerAbout', styles.container)}>
                <div className={styles.titleSection}>
                    <span className={styles.subTitle}>{aboutOurTeamSubTitle}</span>
                    <h2 className={styles.title}>{aboutOurTeamTitle}</h2>
                </div>

                <ul className={styles.listCreators}>
                    {aboutOurTeamList.map(({ id, image, link: { href, text }, subTitle, title }) => (
                        <li
                            key={id}
                            className={styles.listCreatorsItem}
                        >
                            <img
                                className={styles.imageCreator}
                                src={image.src}
                                alt={title}
                            />
                            <h3 className={styles.title}>{title}</h3>
                            <span className={styles.subTitle}>{subTitle}</span>
                            <a
                                className={styles.link}
                                href={href}
                            >
                                <span>{text}</span>
                                <ArrowIcon className={styles.linkIcon} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default OurTeam
