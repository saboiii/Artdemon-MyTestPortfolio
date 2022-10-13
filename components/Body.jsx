import React from 'react'
import Link from "next/link"

const Body = () => {
    return (
        <div>
            <div class="section-1 box">
                <img src="images/portfoliotitle.png" class="title" />
            </div>

            <div class="section-2 box">
                <img src="images/theprocess.png" class="processimage" />
                <div class="section-2text">
                    <h1 class="text-design1">artwork</h1>
                    <p class="text-design2">
                        PSD files for recent sketches are now available.
                    </p>
                    <Link href="/projects" class="learnmore">See projects...</Link>
                </div>
 
            </div>

            <div id="aboutme" class="section-3 box">
                <img src="images/portfolioaboutme.png" class="aboutme" />
            </div>

            <div class="section-4 box">
                <div class="section-4text">
                    <h1 id="skills" class="text-design1">skills</h1>
                    <p class="text-design2">
                        I'm good at using graphic editors.
                    </p>
                </div>
                <img src="images/skills.png" class="skills" />
            </div>
        </div>
    )
}

export default Body