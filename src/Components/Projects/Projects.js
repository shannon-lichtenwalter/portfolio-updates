import React from 'react';
import projectList from './projectList';
import './Projects.css';

class Projects extends React.Component {
  state = {
    num:0
  }

  handlePrev = () => {
    let num = this.state.num;
    if(num === 0){
      num= 5;
    }else {
      num -= 1
    }
    this.setState({
      num
    })
  }

  handleNext = () => {
    let num= this.state.num;
    if(num === 5){
      num = 0;
    } else{
      num += 1
    }
    this.setState({
      num
    })
  }

  handleRenderIconGroup = () => {
    return projectList[this.state.num].techStack.map((icon, index) => {
      return <li key={index}><i className={`devicon-${icon}`}></i></li>
      })
    }

  handleRenderProjects = () => {
    return projectList.map(project => {
      return (
        <>
      <h3 aria-live='polite'>{project.name}</h3>
      <div className="project-image">
        <img className='project'  src={project.image1} alt={project.image1alt}/>
      </div>
      <p aria-live='polite'>
        {project.description}
      </p>
      {/* <div className="dashedLine"></div> */}
      <div className="linksToProject">
        <h3>Created using:</h3>
        <ul className="iconGroup">
          {this.handleRenderIconGroup()}
        </ul>
        <ul>
          <li>
            See it Live: 
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"> 
              <i className="fas fa-laptop-code"></i>
            </a>
          </li>
          <li>
            See the Repo:
            {project.serverRepo 
            ? <div className='multipleRepos'>
              <a href={project.clientRepo} target="_blank" rel="noopener noreferrer">
              Client: <i className="fab fa-github"></i>
              </a>
              <a href={project.serverRepo} target="_blank" rel="noopener noreferrer">
              Server: <i className="fab fa-github"></i>
              </a> 
            </div>
            :<a href={project.clientRepo} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            }
          </li>
        </ul>
      </div>

      <div className='dividerLine'></div>
      </>
      )
    })
  }

  render(){
    return(
      <section className='projects' id='projects'>

      <h2 className='sectionHeading'> Projects</h2>
    {this.handleRenderProjects()}
    </section>
    )
  }
}

export default Projects;