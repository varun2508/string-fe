import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.png'
import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <footer className={styles.Footer}>
            <div className="container">
                <div className={styles.Dock}>
                    <Link href="/" className={styles.DockLogo}>
                        <Image src={Logo} alt="String" loading="lazy" width="129" height="55" />
                    </Link>
                    <div className={styles.DockMenu}>
                        <Link href="/contact" className={styles.DockItem}>
                            <i className="icon-phone"/>
                            <span>Contact</span>
                        </Link>
                        <Link href="/drive" className={styles.DockItem}>
                            <i className="icon-drive"/>
                            <span>Drive</span>
                        </Link>
                        <Link href="#" className={styles.DockItem}>
                            <i className="icon-users"/>
                            <span>Social</span>
                        </Link>
                        <Link href="#" className={styles.DockItem}>
                            <i className="icon-newsletter"/>
                            <span>Newsletter</span>
                        </Link>
                        <Link href="#" className={styles.DockItem}>
                            <i className="icon-cellphone" />
                            <span>SupperDapp</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer