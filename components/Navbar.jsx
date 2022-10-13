import React, { useState } from "react"
import Link from "next/link"
import toggleMobileMenu from '../components/references/mobilemenu.js'

const Navbar = () => {

    return (
        <div>
            <div class="container">
                <div class="navbar">

                    <img src="images/menuicon.png" class="menu-icon" onclick="toggleMobileMenu();"/>
                    <div>
                        <ul id="myLinks" class="mobile-menu">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Skills</a></li>
                        </ul>
                    </div>
                    <nav>
                        <ul>
                            <li> <Link href="/">Home</Link> </li>
                            <li> <Link href="/projects">Projects</Link> </li>
                            <li><a href="#aboutme">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar