import Menu from "./Menu"

export default function Header() {
    const list = [
        {
            url: 'https://www.google.com',
            text: 'Google'
        },
        {
            url: '/login',
            text: 'Login'
        },
        {
            url: '/hello',
            text: 'hello'
        },
        {
            url: '/car',
            text: 'car'
        },
        {
            url: '/notExist',
            text: 'notExist'
        },

    ]
    return <Menu list={list} />
}



