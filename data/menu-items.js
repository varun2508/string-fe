import AboutImage from '../public/about-menu.png'
import TechImage from '../public/tech-menu.png'
import FeatureImage from '../public/feature-menu.png'
import TimelineImage from '../public/timeline-menu.png'
import InvestorsImage from '../public/investors-menu.png'
import BlogImage from '../public/blog-menu.png'

const menuItems = [
    {
        title: 'About',
        subtitle: 'E2EE Blockchain with Data',
        description: 'Sustainable and Scalable',
        icon: 'icon-about',
        image: AboutImage,
        path: '/about',
    },
    {
        title: 'Tech',
        subtitle: 'Data layers, Network layers, DSL & more',
        description: 'Secure to the core',
        icon: 'icon-tech',
        image: TechImage,
        path: '/tech',
    },
    {
        title: 'Features',
        subtitle: 'Out of the box features for developers',
        description: 'Programmable everything',
        icon: 'icon-features',
        image: FeatureImage,
        path: '/features',
    },
    {
        title: 'Timeline',
        subtitle: 'MainNet launch March 2023',
        description: 'Beta-app launch Feb 2023',
        icon: 'icon-timeline',
        image: TimelineImage,
        path: '/timeline',
    },
    {
        title: 'Investors',
        subtitle: 'Seed Round 1.25M of 2.1M raised',
        description: '750,000,000 Token Supply',
        icon: 'icon-investors',
        image: InvestorsImage,
        path: '#',
    },
    {
        title: 'Blog',
        subtitle: 'Latest: String Genetic Authentication',
        description: 'Previous: String Unified Data Model',
        icon: 'icon-blog',
        image: BlogImage,
        path: '/blog',
    }
]

export default menuItems;