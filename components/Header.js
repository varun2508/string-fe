import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.Note}>
                    <h5>Tue, May 18</h5>
                    <p>145 Active Nodes</p>
                    <p>0.00045kWh</p>
                </div>
            </div>
        </header>
    )
}

export default Header