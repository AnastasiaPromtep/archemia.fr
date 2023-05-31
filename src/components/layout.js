import * as React from "react"
import { container } from './layout.module.css'
import Navigation from "./navigation/navigation";
import '../../static/fonts.css';

const Layout = ({ children }) => {
    return (
        <main className={container}>
            <Navigation></Navigation>
            {children}
        </main>
    )
}

export default Layout