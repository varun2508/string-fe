import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from '../components/BackButton'
import ExistingInvestors from '../public/existing-investors.jpg'
import investorsItems from '../data/investors-items'
import styles from '../styles/Menu.module.css'

function Investors() {
    return (
        <>
            <Head>
                <title>String | Investors</title>
            </Head>

            { investorsItems.length > 0 ?
                <div className={styles.MainMenu}>
                    <div className="page-inner pb-0">
                        <BackButton />
                        <div className="page-heading">
                            <div className="page-icon">
                                <i className="icon-timeline" />
                            </div>
                            <h1>Timeline</h1>
                        </div>
                    </div>
                    { investorsItems.map((item, key) => 
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

                    <Link href='/investors/existing-investors' className={styles.MenuLink}>
                        <span className={styles.MenuLinkIcon}>
                            <i className="icon-existing-investors" />
                        </span>
                        <span className={styles.MenuLinkText}>
                            <h3>Investors</h3>
                            <p>
                                <b>See our existing investors</b>
                            </p>
                        </span>
                        <Image src={ExistingInvestors} alt="Investors" loading="lazy" />
                        <i className="icon-next" />
                    </Link>
                </div>
                : ''
            }
        </>
    )
}

export default Investors;