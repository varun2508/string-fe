import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from '../components/BackButton'
import techItems from '../data/tech-items'
import styles from '../styles/Menu.module.css'

function Tech() {
    return (
        <>
            <Head>
                <title>String | Tech</title>
            </Head>

            { techItems.length > 0 ?
                <div className={styles.MainMenu}>
                    <BackButton />
                    { techItems.map((item, key) => 
                        <Link href={item.path} className={styles.MenuLink} key={key}>
                            <span className={styles.MenuLinkIcon}>
                                <i className={item.icon} />
                            </span>
                            <span className={styles.MenuLinkText}>
                                <h3>{item.title}</h3>
                                <p>
                                    <b>{item.subtitle}</b>
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

export default Tech;