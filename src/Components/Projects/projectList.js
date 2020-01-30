import QuizApp1 from '../.././images/QuizApp1.png';
import QuizApp2 from '../.././images/QuizApp2.png';
import BookmarkApp from '../.././images/BookmarkApp.png';
import StarWarsApp from '../.././images/starwars.png';
import Logo from '../.././images/logo.png';
import SpacedRep from '../.././images/spaced-rep.png';
import Battleship from '../.././images/battleship.png';

const projectList = [
  {
    name: 'Pop Art',
    image1: Logo,
    image1alt: 'screenshot of Pop Art banner image',
    image2: null,
    image2alt: null,
    description: `Pop Art is an interactive application that I created to 
    make booking talented artists for events easier and more simplified. Event hosts are 
    able to create event pages which serve a dual purpose of:
    advertising the local event to the community and 
    making artists aware of opportunities for events that they could book.
    This application can be used by local bands, coffee shops, bars, artists, 
    event hosts and creators of all types to help making booking easier for 
    local artists.`,
    techStack: ['react-plain colored', 'javascript-plain colored', 'nodejs-plain colored', 'express-original', 'postgresql-plain colored', 'heroku-original colored', 'html5-plain colored',  'css3-plain colored'],
    liveLink:'https://pop-art.now.sh/',
    clientRepo:'https://github.com/shannon-lichtenwalter/react-pop-art',
    serverRepo:'https://github.com/shannon-lichtenwalter/express-pop-art',
  },
  {
    name: 'Battleship',
    image1: Battleship,
    image1alt: 'screenshot of battleship app',
    image2: null,
    image2alt: null,
    description: `Battleship was built by a four-person team over the course of three weeks.
    It utilizes websockets(socket.io) to bring the classic board game of Battleship to an online format; providing
    the users with live updates on their opponent's moves and game progress. Users can chat with one another during 
    their gameplay and can exit and resume games due to the utilization of database storage for game activity.`,
    techStack: ['react-plain colored', 'javascript-plain colored', 'nodejs-plain colored', 'express-original', 'postgresql-plain colored', 'heroku-original colored', 'html5-plain colored',  'css3-plain colored'],
    liveLink:'https://battleship-capstone.now.sh/',
    clientRepo:'https://github.com/shannon-lichtenwalter/battleship-client',
    serverRepo:'https://github.com/shannon-lichtenwalter/battleship-server',
  },
  {
    name: 'Spaced Repetition: Learn French',
    image1: SpacedRep,
    image1alt: 'screenshot of spaced-repetition app',
    image2: null,
    image2alt: null,
    description: `This application was built with a pair partner and 
    is a platform for learning French 
    through the technique of spaced repetition to 
    help with memorization. With this application the 
    user can create an account and login. They can see a 
    dashboard to view their learning progress. The user 
    is able to 'Start Practicing' where they will be 
    given a French word that they must type in the 
    translation for. The user will be notified if their 
    answer is correct or incorrect. The user will see
    their updated scores. The user can then move on to 
    practicing more words.`,
    techStack: ['react-plain colored', 'javascript-plain colored', 'nodejs-plain colored', 'express-original', 'postgresql-plain colored', 'heroku-original colored', 'html5-plain colored',  'css3-plain colored'],
    liveLink:'https://spaced-repetition-capstone-project.now.sh',
    clientRepo:'https://github.com/shannon-lichtenwalter/spaced-repetition-client',
    serverRepo:'https://github.com/shannon-lichtenwalter/spaced-repetition-server',
  },
  {
    name: 'Bookmark App',
    image1: BookmarkApp,
    image1alt: 'screenshot of bookmark application',
    image2: null,
    image2alt: null,
    description: `This application allows the user to save their favorite websites as
    a bookmark to a server. For this project a server and database were created and deployed via
    Heroku in order to save the user's bookmarks. It allows the user to rate the site and add a brief description
    for future reference. The user can add and delete bookmarks. They can
    see a condensed or expanded view of their saved bookmark. The user can
    also filter the bookmarks to view by rating if they choose to.`,
    techStack: ['javascript-plain colored', 'jquery-plain colored', 'nodejs-plain colored', 'express-original', 'postgresql-plain colored', 'heroku-original colored', 'html5-plain colored',  'css3-plain colored'],
    liveLink:'https://shannon-lichtenwalter.github.io/bookmark-app-connected-to-own-server/',
    clientRepo:'https://github.com/shannon-lichtenwalter/bookmark-app-connected-to-own-server',
    serverRepo: 'https://github.com/shannon-lichtenwalter/bookmark-server',
  },  
  {
    name: 'Star Wars Search App',
    image1: StarWarsApp,
    image1alt: 'screenshot of the main view of the star wars app',
    image2: null,
    image2alt: null,
    description: `A search application that allows a user to search the Star Wars API for 
    characters, starships, movies, and other categories. This simple search is a one page application that
    renders the results of partial or full search terms in a list format,`,
    techStack: ['react-plain colored', 'javascript-plain colored', 'html5-plain colored', 'css3-plain colored'],
    liveLink:'https://shannon-star-wars-app.now.sh/',
    clientRepo:'https://github.com/shannon-lichtenwalter/star-wars-searcher',
    serverRepo:null,
  },
  {
    name: 'Quiz App',
    image1: QuizApp1,
    image1alt: 'screenshot of quiz app question screen',
    image2: QuizApp2,
    image2alt: 'screenshot of incorrect question screen on quiz app',
    description: `Created an interactive space quiz application with a pair partner.
    The quiz allows the user to advance through questions while being
    alerted if they selected the correct or incorrect answer. The user
    is able to see their cumulative score throughout the app and receives
    a final score at the end. The user has the option of restarting the quiz
    upon completion.`,
    techStack: ['javascript-plain colored', 'jquery-plain colored','html5-plain colored', 'css3-plain colored'],
    liveLink:'https://shannon-lichtenwalter.github.io/space-quiz-app/',
    clientRepo:'https://github.com/shannon-lichtenwalter/space-quiz-app',
    serverRepo:null,
  }
];


export default projectList