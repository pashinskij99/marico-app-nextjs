import { Poppins } from '@next/font/google'
import clsx from 'clsx'
import 'normalize.css/normalize.css'
// import Header from '../components/header'
import 'aos/dist/aos.css';
import '../styles/index.scss'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

function MyApp({ Component, pageProps }) {

    return (
        <div
            data-scroll-container
            className={clsx('app', poppins.className)}
        >
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
