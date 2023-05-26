import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from '../components/BackButton'
import driveItems from '../data/drive-items'
import styles from '../styles/Menu.module.css'

function Drive() {
    return (
        <>
            <Head>
                <title>String | Drive</title>
            </Head>

            <div className="page-inner pb-0 pt-10">
                <BackButton />
                <div className="page-heading">
                    <div className="page-icon">
                        <i className="icon-drive-colored" />
                    </div>
                    <h1>String Drive</h1>
                </div>
            </div>
            { driveItems.length > 0 ?
                <div className={`${styles.MainMenu} pt-0`}>
                    { driveItems.map((item, key) => 
                        <Link href={item.path} className={styles.MenuLink} key={key} target="_blank">
                            <div className={styles.MenuLinkIcon}>
                                <i className={item.icon} />
                            </div>
                            <div className={styles.MenuLinkText}>
                                <h4>{item.title}</h4>
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

export default Drive;