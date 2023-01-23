import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import driveItems from '../data/drive-items'
import styles from '../styles/Menu.module.css'
import stylesDrive from '../styles/Drive.module.css'

function Drive() {
    return (
        <>
            <Head>
                <title>String | Drive</title>
            </Head>
            
            <div className="page-inner pb-0">
                <div className="page-heading">
                    <Link href="/tech" className="button-back">
                        <i className="icon-back" />
                    </Link>
                    <div className="page-icon">
                        <i className="icon-drive-colored" />
                    </div>
                    <h1>String Drive</h1>
                </div>
            </div>
            { driveItems.length > 0 ?
                <div className={`${styles.MainMenu} pt-0`}>
                    { driveItems.map((item, key) => 
                        <div className={styles.MenuLink} key={key}>
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
                        </div>
                    )}
                </div>
                : ''
            }
        </>
    )
}

export default Drive;