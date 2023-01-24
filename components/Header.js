import styles from '../styles/Header.module.css'

const Header = () => {
    const date = new Date()
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const month = date.toLocaleString('default', { month: 'long' });
    const weekDay = weekday[date.getDay()]
    const monthDay = date.getDate()

    return (
        <header>
            <div className="container">
                <div className={styles.Note}>
                    <h5>{weekDay}, {month} {monthDay}</h5>
                    <p>145 Active Nodes</p>
                    <p>0.00045kWh</p>
                </div>
            </div>
        </header>
    )
}

export default Header