import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Designing from './Designing';
import Familiar from './Familiar';
import 'boxicons/css/boxicons.min.css';


export default function Skills() {
  return (
    <section className='skills section' id="skills">
        <h2 className='section_title'>Skills</h2>

        <div className='skills_container container grid'>
            <Designing />
            <Frontend/>
            <Backend />
            <Familiar />
        </div>
    </section>
  )
}
