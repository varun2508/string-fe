import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import DynamicBackground from "./DynamicBackground"
import Header from "./Header"
import Footer from "./Footer"

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
            <Header />
            <main className="main">
                <div className="container">
                    <div className="page-content" ref={titleRef}>
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout