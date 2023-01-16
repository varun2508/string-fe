import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutImage from '../public/about-menu.png'
import TechImage from '../public/tech-menu.png'
import FeatureImage from '../public/feature-menu.png'
import TimelineImage from '../public/timeline-menu.png'
import InvestorsImage from '../public/investors-menu.png'
import BlogImage from '../public/blog-menu.png'
import styles from '../styles/Home.module.css'

function Home() {
    return (
        <>
            <Head>
                <title>String | Home</title>
            </Head>
            <main className={styles.main}>
                <div className="container">
                    <div className="page-content">
                        <div className={styles.MainMenu}>
                            <Link href="#" className={styles.MenuLink}>
                                <div className={styles.MenuLinkIcon}>
                                    <i className="icon-about" />
                                </div>
                                <div className={styles.MenuLinkText}>
                                    <h1>About</h1>
                                    <div>
                                        <strong>E2EE Blockchain with Data</strong>
                                        <span>Sustainable and Scalable</span>
                                    </div>
                                </div>
                                <Image src={AboutImage} alt="About" loading="lazy"/>
                                <i className="icon-next" />
                            </Link>
                            <Link href="#" className={styles.MenuLink}>
                                <div className={styles.MenuLinkIcon}>
                                    <i className="icon-tech" />
                                </div>
                                <div className={styles.MenuLinkText}>
                                    <h1>Tech</h1>
                                    <div>
                                        <strong>Data layers, Network layers, DSL & more</strong>
                                        <span>Secure to the core</span>
                                    </div>
                                </div>
                                <Image src={TechImage} alt="Tech" loading="lazy"/>
                                <i className="icon-next" />
                            </Link>
                            <Link href="#" className={styles.MenuLink}>
                                <div className={styles.MenuLinkIcon}>
                                    <i className="icon-features" />
                                </div>
                                <div className={styles.MenuLinkText}>
                                    <h1>Features</h1>
                                    <div>
                                        <strong>Out of the box features for developers</strong>
                                        <span>Programmable everything</span>
                                    </div>
                                </div>
                                <Image src={FeatureImage} alt="Feature" loading="lazy"/>
                                <i className="icon-next" />
                            </Link>
                            <Link href="#" className={styles.MenuLink}>
                                <div className={styles.MenuLinkIcon}>
                                    <i className="icon-timeline" />
                                </div>
                                <div className={styles.MenuLinkText}>
                                    <h1>Timeline</h1>
                                    <div>
                                        <strong>MainNet launch March 2023</strong>
                                        <span>Beta-app launch Feb 2023</span>
                                    </div>
                                </div>
                                <Image src={TimelineImage} alt="Timeline" loading="lazy"/>
                                <i className="icon-next" />
                            </Link>
                            <Link href="#" className={styles.MenuLink}>
                                <div className={styles.MenuLinkIcon}>
                                    <i className="icon-investors" />
                                </div>
                                <div className={styles.MenuLinkText}>
                                    <h1>Investors</h1>
                                    <div>
                                        <strong>Seed Round 1.25M of 2.1M raised</strong>
                                        <span>750,000,000 Token Supply</span>
                                    </div>
                                </div>
                                <Image src={InvestorsImage} alt="Investors" loading="lazy"/>
                                <i className="icon-next" />
                            </Link>
                            <Link href="#" className={styles.MenuLink}>
                                <div className={styles.MenuLinkIcon}>
                                    <i className="icon-blog" />
                                </div>
                                <div className={styles.MenuLinkText}>
                                    <h1>Blog</h1>
                                    <div>
                                        <strong>Latest: String Genetic Authentication</strong>
                                        <span>Previous: String Unified Data Model</span>
                                    </div>
                                </div>
                                <Image src={BlogImage} alt="Blog" loading="lazy"/>
                                <i className="icon-next" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;