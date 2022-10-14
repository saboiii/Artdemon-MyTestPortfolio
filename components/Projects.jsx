import React from 'react'

const Projects = () => {
    return (
        <div>
            <img src="images/drawing1.png" class="gildaImage" />
            <div className="projectspan">
                <h1 className="projectspantext2">Project - Gilda</h1>
                <h2 className="projectspantext1">Overview</h2>
                <p className="projectspantext3">
                    Created using Adobe Photoshop. This is simply a test
                    project for the website I made for Halloween over a
                    course of 2 hours.
                </p>
                <a href="https://drive.google.com/file/d/1DyuXWjAuXLA3xooDQD5JzV5bugOZasXW/view?usp=sharing">
                    <button className="button1">PSD File Download</button>
                </a>
            </div>

            <div className="projectbreak"></div>

            <img src="images/game1.png" class="gameImage" />
            <div className="projectspan1">
                <h1 className="projectspantext2">IMMUNE</h1>
                <h2 className="projectspantext1">Overview</h2>
                <p className="projectspantext3">
                    Created using Unity. This is a work-in-progress game
                    created with the help of my friends. Play and lead armies
                    of immune cells to fight diseases within the human body.
                    All the assets in this game were created by me using PS.
                </p>
                <a href="https://github.com/saboiii/IMMUNE-V1.1-Code">
                    <button className="button2">Code</button>
                </a>
            </div>

            <div className="projectbreak"></div>

            <img src="images/blueghost.png" class="ghostImage" />
            <div className="projectspan2">
                <h1 className="projectspantext2">Project - Blue Ghost</h1>
                <h2 className="projectspantext1">Overview</h2>
                <p className="projectspantext3">
                    Created using Adobe Photoshop. Another piece I made for Halloween
                    over the course of 2 hours 30 minutes.
                </p>
                <a href="https://drive.google.com/file/d/14t7D09KuQz4oi1qhjc35_wiHdQfPN0VH/view?usp=sharing">
                    <button className="button1">PSD File Download</button>
                </a>
            </div>

            <div className="projectbreak"></div>

            <div className="projectspan2">
                <h1 className="projectspantext4">More coming soon!</h1>
            </div>
        </div>
    )
}

export default Projects