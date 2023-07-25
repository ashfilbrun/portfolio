import { Link } from "react-router-dom"

export default function Nav () {
  return(
    <div className="navBar">
      <span className="nav">
        <ul className="navList">
          <li><Link to="/AboutMe">ABOUT ME</Link></li>
          <li><Link to="/Projects">PROJECTS</Link></li>
          <li><Link to="/SkillsList">SKILLS</Link></li>
          <li><Link to='https://docs.google.com/document/d/1AGQGWZTToYiGz_Ttk9BWkzTnlZIunAelh5nbBSugx8U/edit?usp=sharing'>RESUMÉ</Link></li>
          <li><Link to="/ContactMe">CONTACT ME</Link></li>
        </ul>
      </span>
    </div>
  )
}
{/* <Resume />
      <Bio />
      <Skills /> 
      <Projects />
*/}