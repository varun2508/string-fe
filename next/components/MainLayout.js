import Header from "./Header"
import Footer from "./Footer"
import DynamicBackground from "./DynamicBackground"

const MainLayout = ({ children }) => {

    return (
        <>
            <DynamicBackground />
            <Header />
            <main className="main">
                <div className="container">
                    <div className="page-content">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout