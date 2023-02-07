import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import DynamicBackground from "./DynamicBackground"
import Transition from "./Transition"
import Header from "./Header"
import Footer from "./Footer"
import favicon from '../public/favicon.ico';

const MainLayout = ({ children }) => {
    const pathname = usePathname()
    const titleRef = useRef()

    useEffect(() => {
        if(titleRef) {
            titleRef.current.scroll({
                top: 0,
            })
        }
    }, [pathname])

    return (
        <>
            <DynamicBackground />
            <Header>
                <link rel="icon" href={favicon.src} type="image/x-icon" />
            </Header>
            <Transition>
                <main className="main">
                    <div className="container">
                        <div className="page-content" ref={titleRef}>
                            {children}
                        </div>
                    </div>
                </main>
            </Transition>
            <Footer />
        </>
    )
}

export default MainLayout