import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { createContext, useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const SmoothScrollContext = createContext({
    scroll: null,
})

export const SmoothScrollProvider = ({ children, options }) => {
    const [scroll, setScroll] = useState(null)
    // const scrollWrapper = useRef(null)

    useEffect(() => {
        const el = document.querySelector('[data-scroll-container]') ?? undefined

        if (!scroll) {
            ;(async () => {
                try {
                    const LocomotiveScroll = (await import('locomotive-scroll')).default
                    setScroll(
                        new LocomotiveScroll({
                            // el: scrollWrapper.current,
                            el,
                            resetNativeScroll: true,
                            ...options,
                        })
                    )


                    // scrollWrapper.current.style.height = '100%'

                    // const locoScroll = new LocomotiveScroll({
                    //   el: scrollWrapper.current,
                    //   smooth: true,
                    //   lerp: 0.1,
                    //   tablet: {
                    //     smooth: true
                    //   },
                    //   smartphone: {
                    //     smooth: true
                    //   }
                    // })

                    // locoScroll.on('scroll', ScrollTrigger.update)

                    // ScrollTrigger.scrollerProxy(scrollWrapper.current, {
                    //   scrollTop(value) {
                    //     console.log(locoScroll.scroll.instance.scroll.y)
                    //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
                    //   },
                    //   getBoundingClientRect() {
                    //     return {
                    //       top: 0,
                    //       left: 0,
                    //       width: window.innerWidth,
                    //       height: window.innerHeight,
                    //     }
                    //   },
                    //   pinType: scrollWrapper.current.style.transform ? 'transform' : 'fixed',
                    // })

                    // ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

                    // ScrollTrigger.refresh()
                } catch (error) {
                    throw Error(`[SmoothScrollProvider]: ${error}`)
                }
            })()


        }

        // console.log(scroll);
        // el.style.height = '100%'

        return () => {
            scroll && scroll.destroy()
        }
    }, [scroll])

    return (
        <SmoothScrollContext.Provider value={scroll}>
            {/* <div */}
                {/* id='smooth-scroll' */}
                {/* className='smoothScrollContainer data-scroll-container' */}
                {/* data-scroll-container */}
                {/* ref={scrollWrapper} */}
            {/* > */}
                {children}
            {/* </div> */}
        </SmoothScrollContext.Provider>
    )
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'
