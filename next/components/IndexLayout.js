import Header from "./Header"
import DynamicBackground from "./DynamicBackground"

const IndexLayout = ({ children }) => {

    return (
        <>
            <DynamicBackground />
            <Header />
            <main className="main">
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}

export default IndexLayout