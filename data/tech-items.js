import SmartPermissions from './../public/smart-permissions.png'
import ZeroTrustNetwork from '../public/zero-trust-network.png'
import HyperSpaceDatabase from '../public/hyperspace-database.png'
import Consensus from '../public/consensus.png'
import SpecificLanguage from '../public/specific-language.png'

const techItems = [
    {
        id: 'smart-permissions',
        title: 'Smart Permissions',
        subtitle: 'Programmable permissions for every...',
        icon: 'icon-lock',
        image: SmartPermissions,
        path: '/tech/smart-permissions',
        text: `<p>String autonomously manages the encryption & decentralization
            of information within its network, while also storing this data
            encrypted at rest. The transaction ledger of String is natively
            encrypted, allowing users of the network to create public or
            private smart contracts, accounts, and transactions. Any of this
            private data can be made transparent to other parties at any time
            through permission.</p>`,
    },
    {
        id: 'zero-trust-network',
        title: 'Zero-Trust Network',
        subtitle: 'Self-soverign , self-healing node archi..',
        icon: 'icon-network',
        image: ZeroTrustNetwork,
        path: '/tech/zero-trust-network',
        text: `<p>Zero Trust is a framework that acknowledges security threats
            exist within and outside traditional network boundaries. Unlike
            traditional approaches that assume trust based on location within
            a network, Zero Trust continuously verifies real-time security
            information and creates policies that prevent network, execution
            environment, and virtual machine (VM) compromise. </p>
            <p>This ensures that the information is protected at all times,
            regardless of its location or the identity of the person or device
            accessing it, thus providing the highest level of protection for
            sensitive data and digital assets.</p>`
    },
    {
        id: 'hyper-space-database',
        title: 'HyperSpace Database',
        subtitle: 'Data persistence and developer tools',
        icon: 'icon-map',
        image: HyperSpaceDatabase,
        path: '/tech/hyper-space-database',
        text: `<p>Dispersed and Encrypted decentralized DB that supports all
            assets, data types, & solidity smart contracts. It is a scalable,
            high-performance distributed object database.</p>`,
    },
    {
        id: 'consensus',
        title: 'Consensus',
        subtitle: 'Data persistence and developer tools',
        icon: 'icon-search',
        image: Consensus,
        path: '/tech/consensus',
        text: `<p>Consensus algorithm that permanently repairs state
            immutability & highly performant with node healing.</p>`,
    },
    {
        id: 'domain-specific-language',
        title: 'Domain-Specific Language',
        subtitle: 'Interact with String using English',
        icon: 'icon-chat',
        image: SpecificLanguage,
        path: '/tech/domain-specific-language',
        text: `<p>Strings DSL is an invaluable tool for users and developers
            alike. Easily interact with the network using English.</p>`,
    },
]

export default techItems;