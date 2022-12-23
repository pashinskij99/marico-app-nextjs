import React from 'react'
import { pricingCardsArray, pricingTitle } from '../../constants'
import styles from './styles.module.scss'
import CheckIcon from '../../assets/icons/check.svg'
import clsx from 'clsx'

const PricingChoosePlan = () => {
    return (
        <section
            data-scroll-section
            className={styles.wrapper}
        >
            <div className={clsx('container', styles.container)}>
                <h1 className={styles.title}>{pricingTitle}</h1>
                <ul className={styles.planList}>
                    {pricingCardsArray.map(
                        ({
                            benefits,
                            btnText,
                            description,
                            id,
                            keyFeatures: { title, keys },
                            name,
                            price: { or, price },
                            subDescription,
                            subTitle,
                        }) => (
                            <li
                                key={id}
                                className={styles.card}
                            >
                                <h3 className={styles.cardTitle}>{name}</h3>
                                <span className={styles.cardSubTitle}>{subTitle}</span>

                                <div className={styles.price}>
                                    <div className={styles.priceInner}>
                                        <span className={styles.price}>{price}</span>
                                        <span className={styles.preMonth}>Per month</span>
                                    </div>
                                    <span className={styles.or}>{or}</span>
                                </div>

                                <p className={styles.descriptionWrapper}>
                                    <span className={styles.description}>{description}</span>
                                    <span className={styles.subDescription}>{subDescription}</span>
                                </p>

                                <span className={styles.benefits}>{benefits}</span>

                                <div className={styles.keyFeatures}>
                                    <h4>{title}</h4>
                                    <ul className={styles.keyFeaturesList}>
                                        {keys.map((keyFeature) => (
                                            <li
                                                className={styles.keyFeaturesItem}
                                                key={keyFeature}
                                            >
                                                <CheckIcon className={styles.checkIcon} />
                                                <span className={styles.keyFeaturesItemText}>{keyFeature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className={styles.btn}>{btnText}</button>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </section>
    )
}

export default PricingChoosePlan
