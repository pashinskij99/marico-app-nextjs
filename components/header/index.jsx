import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { headerNavLinks, LogoComponent } from '../../constants'
import styles from './styles.module.scss'

const Header = () => {
  const isUser = false

  return (
    <header data-scroll-section className={styles.header}>
      <div className={clsx('container', styles.container)}>
        <Link href='/' legacyBehavior>
          <a className={styles.logo}>
            <LogoComponent className={styles.logoSvg} />
            <span className={styles.logoName}>Marico</span>
          </a>
        </Link>

        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            {headerNavLinks.map(({ id, link, name }) => (
              <Link key={id} href={link} legacyBehavior>
                <a className={styles.headerNavListLink}>{name}</a>
              </Link>
            ))}
          </ul>
        </nav>

        <div className={styles.userProfile}>{isUser ? <IsLogin /> : <IsNotLogin />}</div>
      </div>
    </header>
  )
}

const IsLogin = () => {
  return <div>IsUser</div>
}

const IsNotLogin = () => {
  return (
    <div className={styles.isNotLoginWrapper}>
      <Link href='/login' className={styles.isNotLoginWrapperLogin}>Login</Link>
      <Link href='/signup' className={styles.isNotLoginWrapperSignUp}>Sign Up</Link>
    </div>
  )
}

export default Header
