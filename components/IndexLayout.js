import Header from "./Header"
import DynamicBackground from "./DynamicBackground"
import favicon from '../public/favicon.ico';

const IndexLayout = ({ children }) => {
    return (
        <>
            <DynamicBackground />
            <Header>
                <link rel="icon" href={favicon} type="image/x-icon" />
            </Header>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}

export default IndexLayout