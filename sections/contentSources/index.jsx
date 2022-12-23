import clsx from 'clsx'
import React from 'react'
import { blogSocialListArray, blogSubTitle, blogTitle } from '../../constants'
import styles from './styles.module.scss'

const ContentSources = () => {
    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <div className={clsx('containerAbout', styles.container)}>
                <div className={styles.sectionTitle}>
                    <h1>{blogTitle}</h1>
                    <p>{blogSubTitle}</p>
                </div>

                <ul className={styles.socialList}>
                    {blogSocialListArray.map(({ comingSoon, icon: Icon, id, subTitle, title }) => (
                        <li
                            key={id}
                            className={styles.socialItem}
                        >
                            <Icon className={styles.socialItemIcon} />
                            <h3 className={styles.socialItemTitle}>{title}</h3>
                            <span className={styles.socialItemSubTitle}>{subTitle}</span>
                            {comingSoon && <span className={styles.comingSoon}>Coming Soon</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ContentSources
