import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { headerNavLinks, LogoComponent } from '../../constants'
import styles from './styles.module.scss'

const Footer = () => {
    return (
        <footer
            data-scroll-section
            className={styles.wrapper}
        >
            <div className={clsx('container', styles.container)}>
                <Link
                    href='/'
                    legacyBehavior
                >
                    <a className={styles.logo}>
                        <span className={styles.logoInner}>
                            <LogoComponent className={styles.logoSvg} />
                            <span className={styles.logoName}>Marico</span>
                        </span>
                        <address className={styles.address}>info@marico.co</address>
                    </a>
                </Link>

                <nav className={styles.headerNav}>
                    <ul className={styles.headerNavList}>
                        {headerNavLinks.map(({ id, link, name }) => (
                            <Link
                                key={id}
                                href={link}
                                legacyBehavior
                            >
                                <a className={styles.headerNavListLink}>{name}</a>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
