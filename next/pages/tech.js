import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import techItems from '../data/tech-items'
import styles from '../styles/Home.module.css'

function Tech() {
    return (
        <>
            <Head>
                <title>String | Home</title>
            </Head>

            { techItems.length > 0 ?
                <div className={styles.MainMenu}>
                    { techItems.map(item => 
                        <Link href={item.path} className={styles.MenuLink}>
                            <div className={styles.MenuLinkIcon}>
                                <i className={item.icon} />
                            </div>
                            <div className={styles.MenuLinkText}>
                                <h3>{item.title}</h3>
                                <div>
                                    <b>{item.subtitle}</b>
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

export default Tech;