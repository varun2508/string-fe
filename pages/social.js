import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from '../components/BackButton'
import socialItems from '../data/social-items'
import styles from '../styles/Menu.module.css'

function Social() {
    return (
        <>
            <Head>
                <title>String | Social Media</title>
            </Head>

            <div className="page-inner pb-0">
                <BackButton />
                <div className="page-heading">
                    <div className="page-icon">
                        <i className="icon-users-colored" />
                    </div>
                    <h1>Social Media</h1>
                </div>
            </div>
            { socialItems.length > 0 ?
                <div className={`${styles.MainMenu} pt-0`} target="_blank">
                    { socialItems.map((item, key) => 
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

export default Social;