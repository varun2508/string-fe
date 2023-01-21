import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LogoIntro from '../public/logo-intro.png'
import styles from '../styles/Intro.module.css'

export default function Index() {
    return (
        <div className="page">
            <Head>
                <title>String</title>
            </Head>
            <div className={styles.MainBox}>
                <Image src={LogoIntro}
                    className={styles.LogoIntro}
                    alt="String"
                    loading="lazy"
                    width="270"
                    height="118"
                />
                <h1>Welcome to a better, safer internet.</h1>
                <Link href="/home" alt="Home">Click to enter</Link>
            </div>
        </div>
    )
}

Index.indexLayout = true;