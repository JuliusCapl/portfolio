import React from 'react'
import './About.css'
import retrato from '../../assets/img/retrato.jpg'

const About = () => {
  return (
    <div className="bg-white" id="about">
      <section className="about-- container py-5 py-md-5">
        <div className="about--text py-5 px-md-5">
          <h3 className="mb-4">A little about me...</h3>
          <p>
            My name is Julio Capdevilla, I am a Chilean man new in the industry,
            trying to lear every day something new.
            doiasoidu aosid oiasdoisoid oaisiu douum ipsum dolor sit amet
            consectetur, adipisicing els perspiciatis eius placeat tenetur magni
            debitis impedit ea? Fugit, quae incidunt? Labore accusantium
            nesciunt suscipit ut at aspernatur placeat architecto molestiae
            optio reiciendis?
          </p>
        </div>
        <div className="about--img">
          <img src={retrato} alt="portrait about section" />
        </div>
      </section>
    </div>
  )
}

export default About