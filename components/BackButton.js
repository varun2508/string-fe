import Link from 'next/link'
import { useRouter } from 'next/router'

const BackButton = () => {
    const router = useRouter()

    return (
        <Link href="/" className="button-back" onClick={() => router.back()}>
            <i className="icon-back"/>
        </Link>
    )
}

export default BackButton