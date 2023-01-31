import Head from 'next/head'
import Link from 'next/link'
import BackButton from '../components/BackButton'
import {useRef, useState} from 'react'
import styles from '../styles/Contact.module.css'

function Contact() {
    const [isAdded, setIsAdded] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [errors, setErrors] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsDisabled(true)
        const data = new FormData(event.target)

        let resp = await fetch("https://ftnow.activehosted.com/proc.php", {
            method: 'POST',
            body: data,
            mode: 'no-cors',
        })

        // We cannot detect submit status response
        // Because of "opaque" type of response
        setIsAdded(true)
        setIsDisabled(false)
    }

    return (
        <>
            <Head>
                <title>String | Contact Us</title>
            </Head>
            <div className="page-inner">
                <BackButton />
                <div className="page-heading">
                    <div className="page-icon">
                        <i className="icon-phone-colored" />
                    </div>
                    <h1>Contact Us</h1>
                </div>
                {isAdded && <h5 className="success-msg">Thank You for Message</h5>}
                {!isAdded && <div className="row-col-2">
                    <div className="col">
                        <form onSubmit={handleSubmit} >
                            <input type="hidden" name="u" value="13"/>
                            <input type="hidden" name="f" value="13"/>
                            <input type="hidden" name="s"/>
                            <input type="hidden" name="c" value="0"/>
                            <input type="hidden" name="m" value="0"/>
                            <input type="hidden" name="act" value="sub"/>
                            <input type="hidden" name="v" value="2"/>
                            <input type="hidden" name="or" value="e0ec3c0f5fbc5b9cbc6c2faf598af5bc"/>
                            <div className="form-row">
                                <input type="text" name="fullname" placeholder="Name" required/>
                            </div>
                            <div className="form-row">
                                <input type="email" name="email" placeholder="Email" required/>
                            </div>
                            <div className="form-row">
                                <select name="field[2]" placeholder="Subject">
                                    <option>Subject</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="form-row">
                                <textarea name="field[1]" placeholder="Message" required></textarea>
                            </div>
                            <div className="form-row">
                                <button type="submit" className="btn btn-green" disabled={isDisabled}>
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
                </div>}
            </div>
        </>
    )
}

export default Contact;