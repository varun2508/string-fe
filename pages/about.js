import Head from 'next/head'
import Image from 'next/image'
import BackButton from '../components/BackButton'
import AboutImage from '../public/about-big.png'
import Default from '../public/default-avatar.png'
import styles from '../styles/About.module.css'

function About({teamMembers}) {
    return (
        <>
            <Head>
                <title>String | About</title>
            </Head>

            <div className="page-inner">
                <BackButton />
                <div className="page-heading">
                    <div className="page-icon">
                        <i className="icon-about"/>
                    </div>
                    <h1>About</h1>
                </div>
                <div className="page-intro">
                    <div>
                        <p>String is a unique and pioneering public blockchain
                            that stands out from its peers with its advanced core
                            features. String prioritizes user and developer privacy
                            by providing them with control over what data is made
                            public, while also ensuring that their private data remains
                            fully encrypted and secure.
                        </p>
                        <p>Furthermore, String&apos;s advanced database capabilities
                            expand the types of data that can be stored on-chain,
                            allowing users to move away from centralized off-chain
                            storage solutions. With String, you can be confident in
                            the security and privacy of your data while also enjoying
                            the many benefits of a decentralized blockchain.
                        </p>
                    </div>
                    <div className="page-banner">
                        <Image src={AboutImage} alt="About" loading="lazy"/>
                    </div>
                </div>
                <div className={styles.Team}>
                    <h3>Our Team</h3>
                    <p>We are the baddest team of nerds, geeks, and suits with a
                        perfect blend of intelligence, innovation and execution.
                    </p>

                    {teamMembers?.data.length > 0 ?
                        <div className={styles.TeamItems}>
                            {teamMembers?.data?.map((member, key) =>
                                <div className={styles.TeamMember} key={key}>
                                    <div className={styles.Card}>
                                        <div className={styles.CardFront}>
                                            <Image src={member.photo ?? Default}
                                                   alt={member.name}
                                                   width='280'
                                                   height='285'
                                                   loading="lazy"
                                            />
                                        </div>
                                        <div className={styles.CardBack}
                                             dangerouslySetInnerHTML={{__html: member.about}}
                                        />
                                        <hr/>
                                        <h5>{member.name}</h5>
                                        <p>{member.position}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        :
                        <h3>No items.</h3>
                    }
                </div>
            </div>
        </>
    )
}


export default About;


export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.ApiUrl}/teams`)
    const teamMembers = await res.json()
    if (!teamMembers) {
        return {
            notFound: true,
        }
    }
    return {
        props: {teamMembers},
    }
}