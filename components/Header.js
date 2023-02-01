import Link from 'next/link'
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
                <div className={styles.Content}>
                    <div className={styles.Note}>
                        <h5>{weekDay}, {month} {monthDay}</h5>
                        <p>11 Active Nodes</p>
                        <p>1.32kWh</p>
                    </div>
                    <Link href="/home" className={styles.Home}>
                        <i className="icon-home"></i>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header