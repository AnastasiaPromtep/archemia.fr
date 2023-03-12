import * as React from "react"
import { container } from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <main className={container}>
            <nav>
                <h1>Archemia</h1>
                <ul>
                    <li><a href="#">Galerie</a></li>
                    <li><a href="#">Projets</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Qui sommes nous ?</a></li>
                </ul>
            </nav>
            {children}
        </main>
    )
}

export default Layout