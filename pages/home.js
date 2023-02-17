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
                    { menuItems.map((item, key) => 
                        <Link href={item.path} className={styles.MenuLink} key={key}>
                            <span className={styles.MenuLinkIcon}>
                                <i className={item.icon} />
                            </span>
                            <span className={styles.MenuLinkText}>
                                <h3>{item.title}</h3>
                                <p>
                                    <strong>{item.subtitle}</strong>
                                    <span>{item.description}</span>
                                </p>
                            </span>
                            <Image src={item.image} alt={item.title} loading="lazy" />
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