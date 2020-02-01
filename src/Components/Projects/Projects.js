import React, { Fragment } from 'react';
import projectList from './projectList';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Projects extends React.Component {

  handleRenderIconGroup = (project) => {
    return project.techStack.map((icon, index) => {
      return <li key={index}><i className={`devicon-${icon}`}></i></li>
    })
  }

  handleRenderProjects = () => {
    return projectList.map((project, index) => {
      return (
        <Fragment key={index}>
          <h3 aria-live='polite'>{project.name}</h3>
          <div className="project-image">
            <img className='project' src={project.image1} alt={project.image1alt} />
          </div>
          <p aria-live='polite'>
            {project.description}
          </p>
          <div className="linksToProject">
            <h3>Created using:</h3>
            <ul className="iconGroup">
              {this.handleRenderIconGroup(project)}
            </ul>
            <ul>
              <li>
                See it Live:
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-laptop-code"></i>
                </a>
              </li>
              <li>
                See the Repo:
                {project.serverRepo
                  ? <div className='multipleRepos'>
                    <a 
                      href={project.clientRepo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Client: <i className="fab fa-github"></i>
                    </a>
                    <a 
                      href={project.serverRepo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Server: <i className="fab fa-github"></i>
                    </a>
                  </div>
                  : <a href={project.clientRepo} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                }
              </li>
            </ul>
          </div>
          <div className='dividerLine'></div>
        </Fragment>
      )
    })
  }

  render() {
    AOS.init();
    return (
      <section 
        className='projects' 
        data-aos='fade-in' 
        data-aos-easing='ease-in-sine' 
        data-aos-duration="600" 
        id='projects'
      >
        <h2 className='sectionHeading'>Projects</h2>
        {this.handleRenderProjects()}
      </section>
    )
  }
}

export default Projects;