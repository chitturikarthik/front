
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './project.css';
const Project = () => {
  const [projData, setProjData] = useState([]);

  const fetchAllProj = async () => {
    const res = await axios.get(`https://mern-hpvr.onrender.com/getproj`);
    console.log(res);
    setProjData(res.data);
  };  

  useEffect(() => {
    fetchAllProj();
  }, []);

  return (
    <section className="work section" id="work">
      <h2 className="section_title">My Work</h2>

      <div className="work__container container grid">
        {projData.map((project) => (
          <div key={project._id} className="work__card">
            <div className='project_img'>
              <img alt="" src={project?.project_img} className="work__img" />
            </div>
            <div className='project_details'>
              <h3 className="work__title">{project?.title}</h3>
              {/* <p style={{ fontSize: "13px", fontWeight: 300, marginBottom: "12px" }}>
                {project?.description}
              </p> */}
              <ul>
                <li>{project?.point_one}</li>
                <li>{project?.point_two}</li>
                <li>{project?.point_three}</li>
              </ul>

              <div className='buttons'>
                <a className="proj_button link" href={project?.live_link} target="new">
                  View <i className="bx bx-right-arrow-alt work__button_icon"></i>
                </a>
                <a className="proj_button code" href={project?.code_link} target="new">
                  Source Code <i className="bx bx-right-arrow-alt work__button_icon"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
