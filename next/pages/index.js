import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Index() {
    return (
        <>
            <Head>
                <title>String</title>
            </Head>
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.MainBox}>
                        <h1>Welcome to a better, safer internet.</h1>
                        <Link href="/home">Click to enter</Link>
                    </div>
                </div>
            </main>
        </>
    )
}

Index.indexLayout = true;