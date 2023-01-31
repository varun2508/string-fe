import Head from 'next/head'
import Link from 'next/link'
import {useRef, useState} from 'react'
import BackButton from '../components/BackButton'

function Superdapp() {
    const [isAdded, setIsAdded] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [errors, setErrors] = useState([])
    const emailRef = useRef(0)

    const submitForm = async (e) => {
        e.preventDefault();
        setIsDisabled(true)
        let req = await fetch('https://admin-staging.string3.org/api/newsletter', {
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

        setIsDisabled(false)
    }

    return (
        <>
            <Head>
                <title>String | SuperDapp</title>
            </Head>

            <div className="page-inner">
                <BackButton />
                <div className="page-heading">
                    <div className="page-icon">
                        <i className="icon-cellphone-colored" />
                    </div>
                    <h1>SuperDapp Beta Release</h1>
                </div>
                {isAdded && <h5 className="success-msg">Thank You for Subscribing</h5>}
                {!isAdded && <div className="row-col-2">
                     <div className="col">
                        <p>
                            Join the waiting list for our much anticipated
                            String SuperDapp.
                        </p>
                        <p>
                            Enjoy everything Web3 has to offer in one place. 
                        </p>
                        <p>
                            Private wallets, transactions, NFTs, smart
                            contracts, communication, transfers, data storage,
                            and more!
                        </p>
                    </div>
                    <div className="col">
                        <form action="#" method="POST">
                            <div className="form-row">
                                <input type="email" ref={emailRef} name="email" placeholder="Email"/>
                                {errors.map((error, index)=><span className="error-msg" key={index}>{error.title}</span>)}
                            </div>
                            <div className="form-row">
                                <button type="submit"
                                    className="btn btn-green"
                                    onClick={submitForm}
                                    disabled={isDisabled}
                                >
                                    Submit
                                    <i className="icon-thin-right"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Superdapp;