import Head from 'next/head'
import Link from 'next/link'
import {useRef, useState} from 'react'


function Newsletter() {
    const [isAdded, setIsAdded] = useState(false)
    const [errors, setErrors] = useState([])
    const emailRef = useRef(0)

    const onclick = async (e) => {
        e.preventDefault();
        let req = await fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({
                    "email": emailRef.current.value
                }
            ),
        })
        let resp = await req.json();
        if (req.ok) {
            setIsAdded(true)
        } else {
            setErrors(resp?.errors)
        }
    }

    return (
        <>
            <Head>
                <title>String | Newsletter</title>
            </Head>

            <div className="page-inner">
                <div className="page-heading">
                    <Link href="/features" className="button-back">
                        <i className="icon-back"/>
                    </Link>
                    <div className="page-icon">
                        <i className="icon-newsletter-colored"/>
                    </div>
                    <h1>Newsletter</h1>
                </div>
                <div className="row-col-2">
                    {isAdded && <h3>Thank You for Subscribing</h3>}
                    {!isAdded && <div className="col">
                        <p>
                            Join our weekly newsletter for all bleeding-edge
                            updates from the String team.
                        </p>
                        <p>
                            Giveaways, airdrops, prizes, early access and more!
                        </p>
                    </div>}

                    {!isAdded && <div className="col">
                        <form action="#" method="POST">
                            <div className="form-row">
                                <input type="email" ref={emailRef} name="email" placeholder="Email"/>
                                {errors.map((error, index)=><span key={index}>{error.title}</span>)}
                            </div>
                            <div className="form-row">
                                <button type="submit" className="btn btn-green" onClick={onclick}>
                                    Submit
                                    <i className="icon-thin-right"/>
                                </button>
                            </div>
                        </form>

                    </div>}
                </div>
            </div>
        </>
    )
}

export default Newsletter;
