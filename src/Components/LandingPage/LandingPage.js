import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {
  render(){
  return (
    <header id='welcome'>
      <div className="initials" onClick={()=> this.props.history.push('/about')}>
        <h1>SL</h1>
      </div>
      <div className='introStatements'>
        <h1 aria-live='polite'>Shannon Lichtenwalter</h1>
        <h2 aria-live='polite'>Pediatric Nurse Turned Fullstack Web Developer...</h2>
      </div>
    </header>
  )
  }
}

export default LandingPage;
