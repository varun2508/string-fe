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
        text: `<p>Smart Permission in String is a feature that enables
            programmatic control over the access and visibility of data
            stored within the network. It provides a flexible and secure way
            for users to manage their information, ensuring that only those
            with the appropriate permissions can view or interact with the data.
            The Smart Permission system operates by autonomously managing the
            encryption and decentralization of data within the network,
            allowing for highly secure storage of sensitive information.
            The transaction ledger of String is natively encrypted, providing
            users with the ability to create public or private smart contracts,
            accounts, and transactions. The programmability of Smart Permission
            in String allows for the creation of custom access control rules
            and policies, enabling users to define their own criteria for who
            has access to their data and how it can be used. This makes it
            possible to build complex, multi-party applications and systems
            with granular control over data access and visibility.</p>`,
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
            environment, and virtual machine (VM) compromise.</p>
            <p>This ensures that the information is protected at all times,
            regardless of its location or the identity of the person or
            device accessing it, thus providing the highest level of protection
            for sensitive data and digital assets.</p>`
    },
    {
        id: 'hyper-space-database',
        title: 'HyperSpace Database',
        subtitle: 'Data persistence and developer tools',
        icon: 'icon-map',
        image: HyperSpaceDatabase,
        path: '/tech/hyper-space-database',
        text: `<p>String Database is a decentralized and encrypted database
            that is designed to be the first unified transaction and state
            database among blockchains. It supports all assets, data types,
            and Solidity smart contracts, and provides a scalable,
            high-performance solution for storing and managing large
            amounts of data in a secure and decentralized manner.</p>`,
    },
    {
        id: 'consensus',
        title: 'Consensus',
        subtitle: 'Data persistence and developer tools',
        icon: 'icon-search',
        image: Consensus,
        path: '/tech/consensus',
        text: `<p>String utilizes a highly efficient consensus algorithm,
            which not only ensures the permanent immutability of the state,
            but also enables node healing and high performance. The concurrent
            block production feature of String's consensus algorithm allows
            multiple blocks to be produced and added to the blockchain
            simultaneously, improving the overall speed and efficiency of the
            network. The algorithm also balances the load among multiple nodes
            to ensure the stability and security of the network. The consensus
            mechanism leverages the Proof of Stake (PoS) approach for
            transaction validation, where nodes who stake String are
            designated as "miners". These staked miners are incentivized
            through staking rewards and transaction fees for validating the
            String node infrastructure. </p>`,
    },
    {
        id: 'domain-specific-language',
        title: 'Domain-Specific Language',
        subtitle: 'Interact with String using English',
        icon: 'icon-chat',
        image: SpecificLanguage,
        path: '/tech/domain-specific-language',
        text: `<p>Strings DSL is a powerful and user-friendly tool that allows
            users and developers to interact with the network in a simple and
            intuitive way. The main benefit of Strings DSL is its ease of use,
            as it utilizes natural language commands in English to control
            the network. </p>`,
    },
]

export default techItems;