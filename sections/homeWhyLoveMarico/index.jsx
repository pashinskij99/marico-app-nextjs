import clsx from 'clsx'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React from 'react'
import { homeWhyLoveSubTitleList, homeWhyLoveTitleH2 } from '../../constants/index'
// import Step1 from './step1'
// import Step2 from './step2'
// import Step3 from './step3'
import styles from './styles.module.scss'
// import { SmoothScrollContext } from '../../contexts/SmoothScroll.context'

// gsap.registerPlugin(ScrollTrigger)

const HomeWhyLoveMarico = () => {
    // const { scroll } = useContext(SmoothScrollContext)

    // useEffect(() => {
    //   console.log('1');
    //   gsap.from(h2.current, {
    //     scrollTrigger: {
    //       trigger: wrapper.current,
    //       scroller: scroll,
    //       scrub: true,
    //       pin: true,
    //       start: 'top top',
    //       end: '+=150%',
    //       markers: true
    //     },
    //     scaleX: 1,
    //     ease: 'none',
    //   })
    // }, [])

    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <div className={clsx(styles.container, 'container')}>
                <div className={styles.titleSectionWrapper}>
                    <h2 className={styles.titleSection}>{homeWhyLoveTitleH2}</h2>

                    <ul className={styles.listOfBenefits}>
                        {homeWhyLoveSubTitleList.map(({ description, IconComponent, id, name }) => (
                            <li
                                className={styles.benefitItem}
                                key={id}
                            >
                                <div className={styles.benefitItemTitleWrapper}>
                                    <IconComponent className={styles.benefitItemTitleIcon} />
                                    <h3 className={styles.benefitItemTitle}>{name}</h3>
                                </div>
                                <p className={styles.benefitItemDescription}>{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HomeWhyLoveMarico
