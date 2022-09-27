import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        text: "Home Page",
        url: "/"
    },
    {
        text: "Users",
        url: "/users"
    },
    {
        text: "Login",
        url: "/login"
    },
]

export default function Sidebar() {
    return (
        <nav className="bg-gray-800 text-white min-h-screen sticky top-0 p-24">
            <h2 className="text-h2 font-bold">Our App Name</h2>
            <ul className='w-full flex flex-col gap-12 mt-32'>
                {links.map(link => <li><Link to={link.url} className='block w-full p-12 rounded-8 hover:bg-purple-400'>{link.text}</Link></li>)}
            </ul>
        </nav>
    )
}
