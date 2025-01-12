import { Link } from "react-router-dom"

export default function Nav () {
  return(
    <div className="nav">
      <ul className="navList">
        <li><Link to="/AboutMe">ABOUT ME</Link></li>
        <li><Link to="/Projects">PROJECTS</Link></li>
        <li><Link to="/SkillsList">SKILLS</Link></li>
        <li><Link to='https://docs.google.com/document/d/1rzwiwpdr9qnRkkcQn3deKP5tswChxf2Mb44XuhZd_AU/edit?usp=sharing'>RESUMÉ</Link></li>
        <li><Link to="/ContactMe">CONTACT ME</Link></li>
      </ul>
    </div>
  )
}
{/* <Resume />
      <Bio />
      <Skills /> 
      <Projects />
*/}