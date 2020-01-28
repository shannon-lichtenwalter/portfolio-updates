import QuizApp1 from '../.././images/QuizApp1.png';
import QuizApp2 from '../.././images/QuizApp2.png';
import WaitstaffCalc from '../.././images/WaitstaffCalc.png';
import BookmarkApp from '../.././images/BookmarkApp.png';
import StarWarsApp from '../.././images/starwars.png';
import Logo from '../.././images/logo.png';

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
    techStack: ['react-plain colored', 'javascript-plain colored', 'nodejs-plain colored', 'express-original', 'postgresql-plain colored', 'html5-plain colored',  'css3-plain colored'],
    liveLink:'https://pop-art.now.sh/my-account',
    clientRepo:'https://github.com/shannon-lichtenwalter/react-pop-art',
    serverRepo:'https://github.com/shannon-lichtenwalter/express-pop-art',
  },
  {
    name: 'Bookmark App',
    image1: BookmarkApp,
    image1alt: 'screenshot of bookmark application',
    image2: null,
    image2alt: null,
    description: `This application allows the user to save their favorite websites as
    a bookmark to a server. For this project the Thinkful student server
    was used. It allows the user to rate the site and add a brief description
    for future reference. The user can add and delete bookmarks. They can
    see a condensed or expanded view of their saved bookmark. The user can
    also filter the bookmarks to view by rating if they choose to.`,
    techStack: ['javascript-plain colored', 'jquery-plain colored','html5-plain colored', 'css3-plain colored'],
    liveLink:'https://thinkful-ei-heron.github.io/Shannon-bookmark-app/',
    clientRepo:'https://github.com/thinkful-ei-heron/Shannon-bookmark-app',
    serverRepo:null,
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
    clientRepo:'https://github.com/thinkful-ei-heron/Shannon-star-wars',
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
    liveLink:'https://thinkful-ei-heron.github.io/zee_shannon_quiz_app/',
    clientRepo:'https://github.com/thinkful-ei-heron/zee_shannon_quiz_app',
    serverRepo:null,
  },
  {
    name: 'Waitstaff Calculator',
    image1: WaitstaffCalc,
    image1alt: 'screenshot of waitstaff calculator application',
    image2: null,
    image2alt: null,
    description: `Simple app designed to calculate meal subtotals and tip.
    The user is able to input meal price, tax rate, and tip rate. Upon
    submitting this input the calculator will render the subtotal for
    the meal, tip in dollar amount, and total cost of the meal. Additionally,
    the app will keep track of the total earned tips for the day and the
    average tip received per meal.`,
    techStack: ['javascript-plain colored', 'jquery-plain colored','html5-plain colored', 'css3-plain colored'],
    liveLink:'https://thinkful-ei-heron.github.io/waitstaff-calculator-Shannon/',
    clientRepo:'https://github.com/thinkful-ei-heron/waitstaff-calculator-Shannon',
    serverRepo:null,
  }
];


export default projectList