import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

const ButtonGetStarted = ({ type = true, className = null }) => <button className={clsx(styles.btn, styles.buttonGetStarted, className, {
  [styles.type]: type
})}>Get Started Now</button>

const ButtonDemo = ({ type = false, className = null }) => <button className={clsx(styles.btn, styles.buttonDemo, className, {
  [styles.type]: type
})}>View A Demo</button>

export { ButtonGetStarted, ButtonDemo }
