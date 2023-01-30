import Head from 'next/head'
import Image from 'next/image'
import BackButton from '../../components/BackButton'

function BlogInner({post}) {
    return (
        <>
            <Head>
                <title>String | {post.data.title}</title>
            </Head>

            <div className="page-inner">
                <BackButton />
                <div className="page-heading">
                    <div className="page-icon">
                        <i className="icon-blog" />
                    </div>
                    <h1>{post.data.title}</h1>
                </div>
                <div>
                    <div className="page-banner">
                        <Image src={post.data.thumbnail}
                            alt={post.data.title}
                            loading="lazy"
                            height="355"
                            width="440"
                        />
                        <br/>
                        <br/>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: post.data.content }}
                    />
                </div>
            </div>
        </>
    )
}

export default BlogInner;

export async function getServerSideProps(context) {
    const { query } = context;
    const { id } = query;
    const res = await fetch(`${process.env.ApiUrl}/posts/${id}`)
    const post = await res.json()
    if (!post) {
        return {
            notFound: true,
        }
    }
    return {
        props: {post},
    }
}