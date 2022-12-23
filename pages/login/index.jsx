import React from 'react'
import Header from '../../components/header'
import styles from './styles.module.scss'
import AppleIcon from '../../assets/icons/login/Apple.svg'
import GoogleIcon from '../../assets/icons/login/Google.svg'
import FacebookIcon from '../../assets/icons/login/Facebook.svg'
import UserIcon from '../../assets/icons/login/user.svg'
import PasswordIcon from '../../assets/icons/login/password.svg'
import Link from 'next/link'
import clsx from 'clsx'
import { SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
import Head from 'next/head'

const socialArray = [
    { id: 0, title: 'Log in with Apple', icon: AppleIcon },
    { id: 1, title: 'Log in with Facebook', icon: FacebookIcon },
    { id: 2, title: 'Log in with Google', icon: GoogleIcon },
]

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <SmoothScrollProvider options={{ smooth: true }}>
            <Head>
                <title>Login</title>
                <meta
                    name='description'
                    content='Marico App'
                />
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>

            <div className={styles.wrapper}>
                <Header />

                <div className={clsx('container', styles.container)}>
                    <h1 className={styles.titlePage}>Log in</h1>
                    <p className={styles.subTitle}>Login into existing account.</p>

                    <form
                        autoComplete='off'
                        className={styles.form}
                        onSubmit={handleSubmit}
                        action='submit'
                    >
                        <div className={styles.inputWrapper}>
                            <label className={styles.label}>
                                <input
                                    className={styles.labelInput}
                                    required
                                    name='username'
                                    type='text'
                                />
                                <span className={styles.labelName}>Username</span>
                                <UserIcon className={styles.labelIcon} />
                            </label>

                            <label className={styles.label}>
                                <input
                                    className={styles.labelInput}
                                    required
                                    name='password'
                                    type='password'
                                />
                                <span className={styles.labelName}>Password</span>
                                <PasswordIcon className={styles.labelIcon} />
                            </label>
                        </div>

                        <button className={styles.btnLogin}>Log In</button>

                        <h2 className={styles.titleOr}>Or</h2>
                        <span className={styles.subTitleOr}>Log in with...</span>

                        <ul className={styles.socialVariants}>
                            {socialArray.map(({ icon: Icon, id, title }) => (
                                <li
                                    key={id}
                                    className={styles.socialVariantsItem}
                                >
                                    <button className={styles.socialVariantsBtn}>
                                        <Icon className={styles.socialVariantsIcon} />
                                        <span className={styles.nameBtn}>{title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </form>

                    <Link
                        href='/signup'
                        legacyBehavior
                    >
                        <a className={styles.dontHaveAccount}>Don’t have an account? Create One.</a>
                    </Link>
                </div>
            </div>
        </SmoothScrollProvider>
    )
}

export default Login
