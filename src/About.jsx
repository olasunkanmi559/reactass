import React from 'react'
import Button from './Button'

const About = () => {
  
  return (
    <div>
      <div className='About'>
        <h1>
          About Me
        </h1>
        <p>
          Hi, i am Tunji Olasukanmi. I'm a passionate web developer with a strong interest in front-end technologies.
          I love creating intuitive and user-friendly website. In my free time, i practice what i have learnt, learning new technologyies, and exploring innovative ways to solve problems.
        </p>
        <p>
          I have experienced working with React JS, Javascript, CSS, and HTML. I'm always eager to learn and improve my skills.
        </p>
      </div>
      <div  className='About'>
        <h1>
          PROJECT I HAVE DONE SO FAR
        </h1>
        <ul className='ulp'>
          <li> Follow this link to check my Projects : <a href="https:/olasunkanmi559.github.io/project" className='lip'>MY PROJECTS</a> </li>
        </ul>
      </div>
    </div>
  )
}

export default About
