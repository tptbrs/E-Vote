// constants.js - cleaned version

// Footer links can stay as they are, or update if needed
const footerLinks = [
    {
        id: 1,
        name: 'Terms & Conditions',
        linkTo: "terms",
    },
    {
        id: 2,
        name: 'Privacy Policy',
        linkTo: "policies",
    },
    
]

// Navigation links - removed About, Services, and Contact
const navLinks = [
    {
        id: 1,
        name: 'Home',
        linkTo: "/",
    },
    {
        id: 2,
        name: 'Poll',
        linkTo: "/poll",
    },
]

// Side links remain the same
const sideLinks = [
    {
        id: 1,
        icon_name: 'home',
        text: 'My Feed',
        linkTo: "/poll",
    },
    {
        id: 2,
        icon_name: 'apps',
        text: 'Dashoard',
        linkTo: "/poll/dashboard",
    },
    {
        id: 3,
        icon_name: 'bar-chart-outline',
        text: 'Create Poll',
        linkTo: "/poll/create",
    },
    {
        id: 4,
        icon_name: 'bar-chart-outline',
        text: 'My Polls',
        linkTo: "/poll/my-poll",
    },
    {
        id: 5,
        icon_name: 'bar-chart-outline',
        text: 'My votes',
        linkTo: "/poll/my-vote",
    },
]

// Messages for polls
const pollMessage = {
    'feeds': 'No Feeds Found',
    'votes': 'You have ZERO votes',
    'polls': 'You have ZERO poll'
}

export { footerLinks, navLinks, sideLinks, pollMessage }
