import Head from 'next/head'
import Image from 'next/image'
import BackButton from '../components/BackButton'
import AboutImage from '../public/about-big.png'
import Default from '../public/default-avatar.png'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

function Blog({posts}) {
    return (
        <>
            <Head>
                <title>String | Blog</title>
            </Head>

            <div className="page-inner">
                <BackButton />
                <div className="page-heading">
                    <div className="page-icon">
                        <i className="icon-blog" />
                    </div>
                    <h1>Blog</h1>
                </div>
                <div className={styles.Blog}>
                    {posts?.data.length > 0 ?
                        <div className={styles.BlogItems}>
                            {posts?.data?.map((post, key) =>
                                <div className={styles.BlogItem} key={key}>
                                    <Link href={`/blog/${ post.id}`}
                                        className={styles.BlogCard}
                                    >
                                        <Image src={post.thumbnail ?? Default}
                                            alt={post.title}
                                            width="285"
                                            height="280"
                                            loading="lazy"
                                        />
                                    </Link>
                                    <hr/>
                                    <h5>{post.title}</h5>
                                    <div className={styles.Short}
                                        dangerouslySetInnerHTML={{__html: post.short_content}}
                                    />
                                    <Link className={styles.More}
                                        href={`/blog/${ post.id}`}>
                                        Read more<i className="icon-right" />
                                    </Link>
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

export default Blog;

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.ApiUrl}/posts`)
    const posts = await res.json()
    if (!posts) {
        return {
            notFound: true,
        }
    }
    return {
        props: {posts},
    }
}