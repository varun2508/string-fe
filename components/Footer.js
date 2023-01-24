import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.png'
import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    const { pathname } = useRouter()

    return (
        <footer className={styles.Footer}>
            <div className="container">
                <div className={styles.Dock}>
                    <Link href="/" className={styles.DockLogo}>
                        <Image src={Logo} alt="String" loading="lazy" width="129" height="55" />
                    </Link>
                    <div className={styles.DockMenu}>
                        <Link href="/contact"
                            className={styles.DockItem}
                            data-link={pathname == "/contact" ?? "true" }
                        >
                            <i className="icon-phone"/>
                            <span>Contact</span>
                        </Link>
                        <Link href="/drive"
                            className={styles.DockItem}
                            data-link={pathname == "/drive" ?? "true"}
                        >
                            <i className="icon-drive"/>
                            <span>Drive</span>
                        </Link>
                        <Link href="/social"
                            className={styles.DockItem}
                            data-link={pathname == "/social" ?? "true"}
                        >
                            <i className="icon-users"/>
                            <span>Social</span>
                        </Link>
                        <Link href="/newsletter"
                            className={styles.DockItem}
                            data-link={pathname == "/newsletter" ?? "true"}
                        >
                            <i className="icon-newsletter"/>
                            <span>Newsletter</span>
                        </Link>
                        <Link href="/superdapp"
                            className={styles.DockItem}
                            data-link={pathname == "/superdapp" ?? "true"}
                        >
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