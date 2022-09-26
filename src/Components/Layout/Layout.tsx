import { PropsWithChildren } from 'react'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-[326px_1fr] items-start">
            <Sidebar />
            <div className="page-container min-h-screen">
                {children}
            </div>
        </div>
    )
}
