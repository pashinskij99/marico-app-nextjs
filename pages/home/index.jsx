import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import styles from './styles.module.scss'
import { SmoothScrollContext, SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
// import { useContext } from 'react'
import HomeFirstScreen from '../../sections/homeFirstScreen'
import HomeWhyLoveMarico from '../../sections/homeWhyLoveMarico'

import Step1 from '../../sections/steps/step1'
import Step2 from '../../sections/steps/step2'
import Step3 from '../../sections/steps/step3'
import ExpertsAgree from '../../sections/expertsAgree'
import Helpers from '../../sections/helpers'
import GetStartedNow from '../../sections/getStartedNow'
import Footer from '../../sections/footer'
export default function Home() {
  // const { scroll } = useContext(SmoothScrollContext)

  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Head>
        <title>Home</title>
        <meta name='description' content='Marico App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <Header />
      <HomeFirstScreen />
      <HomeWhyLoveMarico />
      <Step1 />
      <Step2 />
      <Step3 />
      <ExpertsAgree />
      <Helpers />
      <GetStartedNow />
      <Footer />
      
    </SmoothScrollProvider>
  )
}
