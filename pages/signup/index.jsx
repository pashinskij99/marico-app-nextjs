import React from 'react'
import Header from '../../components/header'
import styles from './styles.module.scss'
import AppleIcon from '../../assets/icons/login/Apple.svg'
import GoogleIcon from '../../assets/icons/login/Google.svg'
import FacebookIcon from '../../assets/icons/login/Facebook.svg'
import UserIcon from '../../assets/icons/login/user.svg'
import PasswordIcon from '../../assets/icons/login/password.svg'
import EmailIcon from '../../assets/icons/login/email.svg'
import Link from 'next/link'
import clsx from 'clsx'
import { SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
import Head from 'next/head'

const socialArray = [
    { id: 0, title: 'Sign up with Apple', icon: AppleIcon },
    { id: 1, title: 'Sign up with Facebook', icon: FacebookIcon },
    { id: 2, title: 'Sign up with Google', icon: GoogleIcon },
]

const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <SmoothScrollProvider options={{ smooth: true }}>
            <Head>
                <title>Sign up</title>
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

                <div
                    data-scroll-section
                    className={clsx('container', styles.container)}
                >
                    <h1 className={styles.titlePage}>Sign up</h1>
                    <p className={styles.subTitle}>Fill all field for create an account.</p>

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
                                    name='email'
                                    type='email'
                                />
                                <span className={styles.labelName}>Email Address</span>
                                <EmailIcon className={styles.labelIcon} />
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

                            <button className={styles.btnLogin}>Sign Up</button>
                        </div>

                        <h2 className={styles.titleOr}>Or</h2>
                        <span className={styles.subTitleOr}>Sign up with...</span>

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

export default Signup
