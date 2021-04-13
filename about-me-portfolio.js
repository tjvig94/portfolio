const aboutMe = [
    {
        title: "A Growing Web Developer",
        desc: "I am a quick and eager learner who continually strives to improve my craft of developing responsive and attractive web pages. Currently enrolled in the University of New Hampshire's Full-Stack Web Development Bootcamp. Skills in HTML5, CSS3, ES6, Nodejs, Express, SQL, NoSQL, and React."
    },
    {
        title: "Educator",
        desc: "Licensed teacher in the state of New Hampshire holding a Bachelor of Music in Music Education. Recipient of the New Hampshire Band Directors' Association's 'Outstanding Young Band Director' Award, 2020. I lead students through collaboration."
    },
    {
        title: "Musician",
        "desc": "Classically trained trombonist and conductor, having performed with numerous big bands and wind ensembles. I've conducted groups at various levels from very beginning to advanced, and musical styles from jazz, to rock, to classical."
    },
    {
        title: "Table-Top Game Enthusiast",
        desc: "I love strategy and cooperative games - and I especially love finding and learning new games that I have not played before. I am fascinated by the creativity of board game developers and by the process of learning how to master their games."
    }
]

const portfolio = [
    {
        first: true,
        title: "D&D Character Creator Express",
        desc: "Have you ever needed to make a Dungeons and Dragons character on the fly? Well look no further! Making a new character to play with can take quite a bit of time and who has time to waste when you just want to play. This app allows users to easily create new characters fast with generated stats that would meet all the criteria needed to start or jump into a campaign!",
        image: "images/dnd.png",
        alt: "Character Creator Express Homepage",
        deployment: "https://character-creator-express.herokuapp.com/",
        repo: "https://github.com/tjvig94/dnd-quick-character-creator"
    },
    {
        title: "Surprise Me-Al",
        desc: "Surprise Me-al is a mobile-ready application that provides a user with a random meal from a particular region in the world depending on what region the user chooses. Ingredients and directions are listed out on the results page. The user is also provided with a random beverage to go along with their meal. Users can also save their favorite recipes so that they can quickly access those recipes later from the homepage.",
        image: "images/suprise-me-al.png",
        alt: "Surprise Me-Al homepage",
        deployment: "https://tjvig94.github.io/random-meal-generator/",
        repo: "https://github.com/tjvig94/random-meal-generator"
    },
    {
        title: "Weather Dashboard",
        desc: "The Weather Dashboard is an SPA that allows users to search for a city or town and receive weather information for the current day, and the proceeding 5 days. As users search for cities, their recent searches are saved in a list which they can use to quickly load weather data for those prior searches.",
        image: "images/weather-dashboard.png",
        alt: "Weather Dashboard homepage",
        deployment: "https://tjvig94.github.io/weather-dashboard/",
        repo: "https://github.com/tjvig94/weather-dashboard"
    }
]

module.exports = { aboutMe, portfolio };
