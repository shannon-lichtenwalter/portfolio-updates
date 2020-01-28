import React from 'react';
import './NotFoundRoute.css';

function NotFoundRoute(){
  return(
    <section className='notFound'>
      <h2><span className='sectionHeading'>Sorry,</span> the page you are looking for does not exist...</h2>
      <h3>Please use the navigation bar to return to the porfolio site</h3>
    </section>
  )
}

export default NotFoundRoute;