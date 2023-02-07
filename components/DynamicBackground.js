import {useState, useEffect} from 'react'
import Image from 'next/image'
import bg1 from '../public/bg/bg-1.jpg'
import bg2 from '../public/bg/bg-2.jpg'
import bg3 from '../public/bg/bg-3.jpg'
import bg4 from '../public/bg/bg-4.jpg'
import bg5 from '../public/bg/bg-5.jpg'
import bg6 from '../public/bg/bg-6.jpg'
import bg7 from '../public/bg/bg-7.jpg'
import bg8 from '../public/bg/bg-8.jpg'

const DynamicBackground = () => {
    const [newBg, setNewBg] = useState('')

    useEffect(() => {
        let currentBg = null
        const bgs = [ bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8 ]

        if (sessionStorage.getItem("currentBg")) {
            currentBg = sessionStorage.getItem("currentBg")
            setNewBg(bgs[currentBg])
        } else {
            const filteredBgs = bgs.filter(e => e !== currentBg)
            const randomItem = Math.floor(Math.random() * bgs.length)
            setNewBg(filteredBgs[randomItem])
            sessionStorage.setItem('currentBg', randomItem)
        }
    },[])

    if(!newBg) return

    return (
        <div id="bg-wrapper">
            <Image
                alt="Home"
                src={newBg}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
            />
        </div>
    )
}

export default DynamicBackground