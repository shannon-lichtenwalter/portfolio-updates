import React from 'react';
import './LandingPage.css';

function LandingPage(){
  return (
    <header>
      <div className="initials">
        <h1>SL</h1>
      </div>
      <div className='introStatements'>
        <h1 aria-live='polite'>Shannon Lichtenwalter</h1>
        <h2 aria-live='polite'>Pediatric Nurse Turned Fullstack Web Developer...</h2>
      </div>
    </header>
  )
}

export default LandingPage;
