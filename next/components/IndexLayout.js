import Header from "./Header"

const IndexLayout = ({ children }) => {

    return (
        <>
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