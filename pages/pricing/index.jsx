import Head from 'next/head'
import React from 'react'
import Header from '../../components/header'
import { SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
import GetStartedNow from '../../sections/getStartedNow'
import PricingChoosePlan from '../../sections/pricingChoosePlan'
import Footer from '../../sections/footer'
import styles from './styles.module.scss'

const Pricing = () => {
    return (
        <SmoothScrollProvider options={{ smooth: true }}>
            <Head>
                <title>Pricing</title>
                <meta
                    name='description'
                    content='Marico App'
                />
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>

            <Header />
            <PricingChoosePlan />
            <GetStartedNow />
            <Footer />
        </SmoothScrollProvider>
    )
}

export default Pricing
