import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {
  
  render(){
    return (
      <header id='welcome'>
        <a data-scroll className='initialsLink' href='/#about'>
          <div className="initials">
            <h1>SL</h1>
          </div>
        </a>
        <div className='introStatements'>
          <h1 aria-live='polite'>Shannon Lichtenwalter</h1>
          <h2 aria-live='polite'>Pediatric Nurse Turned Fullstack Web Developer...</h2>
        </div>
      </header>
    )
  }
}

export default LandingPage;
