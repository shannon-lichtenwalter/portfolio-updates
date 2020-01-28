import React from 'react';
import './AboutPage.css';

function AboutPage(){
  return(
    <section tabIndex='0'className='aboutMeSection'>
      
      <div className="imgHolder self-photo">
        {/* <!-- <img className="self-photo hidden" src="./images/self-photo.png" alt="photo of Shannon Lichtenwalter"> --> */}
      </div>
      <h2 className='sectionHeading'> About Me</h2>
      {/* <div className="dashedLine"></div> */}
      <div className="aboutMe">
        <p>I may have put away my stethoscope but I still strive to fulfill my passion of enhancing people’s lives and
          well-being. It looks a little different these days, but now I am working towards that same goal through the
          creation and development of high-quality programs and applications.</p>

        <p>I worked as an RN in Pediatric Oncology and Pulmonary hospital units for 5 years prior to discovering a
          passion
          and fascination for coding. I value my years as a nurse as it afforded me opportunities to work as part of a
          team in high stress situations and sharpened my critical thinking and problem solving skills. I have always
          been
          drawn to working with technology and computers, so now I am taking my skills and strengths from the hospital
          bedside to my local text editor.</p>
        <p>Web
          and software development is a field that inspires and motivates me to learn. I have become addicted to that
          feeling of magic when a program or app successfully runs. It makes the world feel bigger and full of
          possibilities and reminds me that there are no limits to what can be created through code. I am currently enrolled in the Engineering Immersion program at Thinkful. Once finished, I look forward to being on
          the front lines of an actively evolving field where I can problem solve, work creatively, and continue to grow my skills. </p>
      </div>
      <ul className="interests">
        <li>When I am not at my computer you can catch me:</li>
        <li><span role='img' aria-label='dog-emoji'>🐶</span>Playing with my doggo “Indiana Jones” aka “Indy”. <span role='img' aria-label='dog-emoji'>🐶</span></li>
        <li><span role='img' aria-label='book-emoji'>📖</span>Curled up with a book <span role='img' aria-label='book-emoji'>📖</span></li>
        <li><span role='img' aria-label='rock-on-emoji'>🤘🏻</span>At a local concert <span role='img' aria-label='rock-on-emoji'>🤘🏻</span></li>
        <li><span role='img' aria-label='wizard-emoji'>🧙🏼‍</span>Watching LOTR on repeat <span role='img' aria-label='wizard-emoji'>🧙🏼‍</span></li>
        <li><span role='img' aria-label='video-game-emoji'>🎮</span>Playing Mario Kart <span role='img' aria-label='video-game-emoji'>🎮</span></li>
      </ul>
    </section>
  )
}

export default AboutPage;