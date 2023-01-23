import Head from 'next/head'
import Link from 'next/link'

function Contact() {
    return (
        <>
            <Head>
                <title>String | Contact Us</title>
            </Head>
            
            <div className="page-inner">
                <div className="page-heading">
                    <Link href="/features" className="button-back">
                        <i className="icon-back" />
                    </Link>
                    <div className="page-icon">
                        <i className="icon-phone-colored" />
                    </div>
                    <h1>Contact Us</h1>
                </div>
                <div className="row-col-2">
                    <div className="col">
                        <form action="#" method="POST">
                            <div className="form-row">
                                <input type="text" name="name" placeholder="Name"/>
                            </div>
                            <div className="form-row">
                                <input type="email" name="email" placeholder="Email"/>
                            </div>
                            <div className="form-row">
                                <select name="subject" placeholder="Subject">
                                    <option>Subject</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div className="form-row">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>
                            <div className="form-row">
                                <button type="submit" className="btn btn-green">
                                    Submit
                                    <i className="icon-thin-right" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <h4>Let&apos;s Talk</h4>
                        <p>
                            Get a hold of the team to develop with String and
                            let&apos;s work together to build the one of
                            best nex-gen communities in blockchain.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;