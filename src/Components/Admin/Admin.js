import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Admin = () => {

  const [project, setProject] = useState({
    title:'',
    point_one:'',
    point_two:'',
    point_three:'',
    project_img:'',
    code_link:'',
    live_link:''
  })

  const handleChange = (e) => {
    setProject({...project,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await axios.post(`http://localhost:5000/createproject`,project);
    console.log(res.data);
  }

  const [projData, setProjData] = useState([]);

  const fetchAllProj = async() => {
      const res = await axios.get(`http://localhost:5000/getproj`);
      console.log(res.data);
      setProjData(res.data);
  }
  useEffect(() => {
    fetchAllProj();
  },[]);

  const handleDelete = async(id) => {
    const res = await axios.delete(`http://localhost:5000/deleteproj/${id}`);
    console.log(res.data);
    fetchAllProj();
  }

  return (
    <div style={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>

      <form style={{margin:"1rem",display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}} onSubmit={handleSubmit}>

          <input type="text" name='title' value={project.title} onChange={handleChange} placeholder="Project Title" /><br/>

          <input type="text" value={project.point_one} onChange={handleChange} name='point_one' placeholder="Point One" /><br/>

          <input type="text" value={project.point_two} onChange={handleChange} name='point_two' placeholder="Point Two" /><br/>

          <input type="text" value={project.point_three} onChange={handleChange} name='point_three' placeholder="Point Three" /><br/>

          <input type="text" value={project.projecgt_img} onChange={handleChange} name='project_img' placeholder="Project Image URL" /><br/>

          <input type="text" value={project.code_link} onChange={handleChange} name='code_link' placeholder="Source Code Link" /><br/>

          <input type="text" value={project.live_link} onChange={handleChange} name='live_link' placeholder="Live Demo Link" /><br/><br/>

          <button type="submit">Create Project</button>
      </form>

      <table style={{border:'1px solid black'}}>
        <tr>
          <th style={{border:'1px solid black'}}>Title</th>
          <th >Project Image</th>
          <th>Code Link</th>
          <th>Live Link</th>
        </tr>
        
        {
          projData.map((project)=>(
            <tr>
              <td style={{border:'1px solid black'}}>{project.title}</td>
              <td style={{border:'1px solid black'}}><img style={{width:'100px',height:'100px'}} src={project.project_img} alt="project_img"/></td>
              <td style={{border:'1px solid black'}}>{project.code_link}</td>
              <td style={{border:'1px solid black'}}>{project.live_link}</td>
              <td style={{border:'1px solid black',padding:'10px'}}>
                <NavLink onClick={()=>{handleDelete(project._id)}}>Delete</NavLink>
              </td>
            </tr>
          ))
        }
        <tr>
          <td></td>
        </tr>
      </table>

    </div>
  )
}

export default Admin