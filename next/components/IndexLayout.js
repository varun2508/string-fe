import Header from "./Header"

const IndexLayout = ({ children }) => {

    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default IndexLayout