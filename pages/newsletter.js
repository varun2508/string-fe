import Head from 'next/head'
import Link from 'next/link'
import BackButton from '../components/BackButton'

function Newsletter() {
    return (
        <>
            <Head>
                <title>String | Newsletter</title>
            </Head>

            <div className="page-inner">
                <BackButton />
                <div className="page-heading">
                    <div className="page-icon">
                        <i className="icon-newsletter-colored" />
                    </div>
                    <h1>Newsletter</h1>
                </div>
                <div className="row-col-2">
                    <div className="col">
                        <p>
                            Join our weekly newsletter for all bleeding-edge
                            updates from the String team.
                        </p>
                        <p>
                            Giveaways, prizes, early access and more!
                        </p>
                    </div>
                    <div className="col">
                        <form action="#" method="POST">
                            <div className="form-row">
                                <input type="email" name="email" placeholder="Email"/>
                            </div>
                            <div className="form-row">
                                <button type="submit" className="btn btn-green">
                                    Submit
                                    <i className="icon-thin-right" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter;