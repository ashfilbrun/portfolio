import { Link } from "react-router-dom"


export default function Projects () {
  return (
    <div className="Projects">
      <h1 className="title">Projects</h1>
      <p>below are a few of my recent projects</p>
      <div className="ProjectWRX">
        <span className="topProjectWrx">
          <h2>ProjectWRX</h2>
          <h3>June 2023</h3>
          <h3><a href="https://github.com/sunder96u/ProjectWRX-Front">GitHub Front-End</a></h3>
          <h3><a href="https://github.com/sunder96u/ProjectWRX-Back">GitHub Back-End</a></h3>
          <h3><a href="https://projectwrx.netlify.app/">Deployed Site</a></h3>
        </span>
        <p>ProjectWRX is a full-stack team-work enhancing task management application built using the MERN stack. <br/>This project was a team-work effort of its own between me and three other software engineers which taught me even more about how to navigate working <br/> with new people to create an application within a short timeline. Excellent communication between team members made this project a dream and I'm so happy that I was involved in building this application.</p>
      </div>
      <div className="BiblioCine">
        <span className="topBiblioCine">
          <h2>BiblioCiné</h2>
          <h3>June 2023</h3>
          <h3><a href="https://github.com/ashfilbrun/movies-vs-books">GitHub</a></h3>
        </span>
        <p>BiblioCiné is a full-stack movie rating application that takes movies which are based off of classic literature <br/>and rates them compared to the book in order to determine which is better: the book or the movie. This application was built with the MERN stack <br/>and I personally seeded all of the necessary movie and book data in the back-end to make sure the proper information was given to the user. <br/> This project reinforced to me the steps required to make your own database. Something new I learned for this project was how to implement modals to display back-end data depending on users choice in the front end.</p>
      </div>
      <div className="bbBuy">
        <h2>Better Best Buy</h2>
        <h3>May 2023</h3>
        <h3><a href="https://github.com/ashfilbrun/u2-fullstackathon-cjam"></a></h3>
        <p>Better Best Buy was a quick full-stack project created and developed by myself and three other software developers <br/> with the purpose of pushing our own limits of how quickly we could recall how to code and create an application. It was created using the MERN stack with CSS used to style the elements. <br/>This project taught me how to troubleshoot Git issues and that there's no such thing as too much communication when one is working with a new team and a short deadline. 
        </p>
      </div>
      <div className="snake">
        <h2>Glow Worm</h2>
        <h3>May 2023</h3>
        <h3><a href="https://github.com/ashfilbrun/Snake-Game">GitHub</a></h3>
        <h3><a href="https://glowworm.surge.sh/">Deployed Game</a></h3>
        <p>Glow Worm is a JavaScript-based game application I built that is heavily inspired by the classic Nokia cell phone game "Snake". This project refined my skills in JavaScript functions and CSS flexbox. I used Figma to plan my styling and Trello to track my progress.
        </p>
      </div>    
      <div className="war">
        <span>
          <h2>The Game of War</h2>
          <h3>April 2023</h3>
          <h3><a href="https://github.com/ashfilbrun/the-game-of-war">GitHub</a></h3>
          <h3><a href="https://thegameofwaraf.netlify.app/">Deployed Game</a></h3>
        </span>
        <p>The Game of War is a JavaScript game application that brings the classic card game to your computer! This project I used JavaScript, CSS3, and HTML5 to build. This project reinforced JavaScript functions, how important divs in html are, and the beauty of concise css.</p>
      </div>
    </div>
  )
}