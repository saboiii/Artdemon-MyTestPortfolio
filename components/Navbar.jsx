import React, { useState } from "react"
import Link from "next/link"
import toggleMobileMenu from '../components/references/mobilemenu.js'

const Navbar = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };


    return (
        <div>
            <div class="container">
                <div class="navbar">

                    <div id="navToggle">
                        <img src="images/menuicon.png" class="menu-icon" onClick={handleToggle} />
                    </div>

                    <nav>
                        <ul>
                            <li> <Link href="/">Home</Link> </li>
                            <li> <Link href="/projects">Projects</Link> </li>
                            <li><a href="/#aboutme">About</a></li>
                            <li><a href="/#skills">Skills</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={isActive ? "mobile-menu" : "open-mobile-menu"}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><a href="/#aboutme">About</a></li>
                        <li><a href="/#skills">Skills</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar