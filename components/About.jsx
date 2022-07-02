import React from 'react'
import about from '../content/about.json'

const About = () => {
  return (
    <>
      <div className="drums">
        <p className="about-text">{about.description}</p>
      </div>
    </>
  )
}

export default About
