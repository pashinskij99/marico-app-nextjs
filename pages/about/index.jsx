import Head from 'next/head'
import React from 'react'
import Header from '../../components/header'
import { SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
import AboutDescription from '../../sections/aboutDescription'
import Footer from '../../sections/footer'
import GetStartedNow from '../../sections/getStartedNow'
import OurTeam from '../../sections/ourTeam'
import styles from './styles.module.scss'

const About = () => {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Head>
        <title>About</title>
        <meta name='description' content='Marico App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <AboutDescription />
      <OurTeam />
      <GetStartedNow />
      <Footer />
    
    </SmoothScrollProvider>
    
  )
}

export default About