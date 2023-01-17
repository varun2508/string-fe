import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import menuItems from '../data/menu-items'
import styles from '../styles/Menu.module.css'

function Home() {
    return (
        <>
            <Head>
                <title>String | Home</title>
            </Head>

            { menuItems.length > 0 ?
                <div className={styles.MainMenu}>
                    { menuItems.map(item => 
                        <Link href={item.path} className={styles.MenuLink}>
                            <div className={styles.MenuLinkIcon}>
                                <i className={item.icon} />
                            </div>
                            <div className={styles.MenuLinkText}>
                                <h1>{item.title}</h1>
                                <div>
                                    <strong>{item.subtitle}</strong>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                            <Image src={item.image} alt="About" loading="lazy" />
                            <i className="icon-next" />
                        </Link>
                    )}
                </div>
                : ''
            }
        </>
    )
}

export default Home;