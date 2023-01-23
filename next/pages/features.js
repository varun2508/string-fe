import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import featuresItems from '../data/features-items'
import styles from '../styles/Menu.module.css'

function Tech() {
    return (
        <>
            <Head>
                <title>String | Features</title>
            </Head>

            { featuresItems.length > 0 ?
                <div className={styles.MainMenu}>
                    { featuresItems.map((item, key) => 
                        <Link href={item.path} className={styles.MenuLink} key={key}>
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