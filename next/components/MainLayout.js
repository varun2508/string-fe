import Header from "./Header"
import Footer from "./Footer"

const MainLayout = ({ children }) => {

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout