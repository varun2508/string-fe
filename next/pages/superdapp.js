import Head from 'next/head'
import Link from 'next/link'

function Superdapp() {
    return (
        <>
            <Head>
                <title>String | SuperDapp</title>
            </Head>
            
            <div className="page-inner">
                <div className="page-heading">
                    <Link href="/features" className="button-back">
                        <i className="icon-back" />
                    </Link>
                    <div className="page-icon">
                        <i className="icon-cellphone-colored" />
                    </div>
                    <h1>SuperDapp Beta Release</h1>
                </div>
                <div className="row-col-2">
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

export default Superdapp;