import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.png'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className="container">
                <div className={styles.Dock}>
                    <Link href="/" className={styles.DockLogo}>
                        <Image src={Logo} alt="String" />
                    </Link>
                    <div className={styles.DockMenu}>
                        <Link href="#" className={styles.DockItem}>
                            <i className="icon-phone"></i>
                            <span>Contact</span>
                        </Link>
                        <Link href="#" className={styles.DockItem}>
                            <i className="icon-drive"></i>
                            <span>Drive</span>
                        </Link>
                        <Link href="#" className={styles.DockItem}>
                            <i className="icon-users"></i>
                            <span>Social</span>
                        </Link>
                        <Link href="#" className={styles.DockItem}>
                            <i className="icon-newsletter"></i>
                            <span>Newsletter</span>
                        </Link>
                        <Link href="#" className={styles.DockItem}>
                            <i className="icon-cellphone"></i>
                            <span>SupperDapp</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer