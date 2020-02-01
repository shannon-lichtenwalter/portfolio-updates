import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

class Content extends React.Component{
  render(){
  
    return(
      <>
      <LandingPage history={this.props.history} />
      <AboutPage />
      <Projects />
      <Contact />
      </>
    )
  }
}

export default Content;