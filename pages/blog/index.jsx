import Head from 'next/head'
import React from 'react'
import Header from '../../components/header'
import { SmoothScrollProvider } from '../../contexts/SmoothScroll.context'
import ContentSources from '../../sections/contentSources'
import Footer from '../../sections/footer'
import GetStartedNow from '../../sections/getStartedNow'
import Helpers from '../../sections/helpers'

const Blog = () => {
  return (

    <SmoothScrollProvider options={{ smooth: true }}>

      <Head>
        <title>Blog</title>
        <meta name='description' content='Marico App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <ContentSources />
      <Helpers />
      <GetStartedNow />
      <Footer />

    </SmoothScrollProvider>

    )
}

export default Blog