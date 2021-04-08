const router = require('express').Router();
const { aboutMe, portfolio } = require('../about-me-portfolio');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/about-me', (req, res) => {
    res.render('about-me', { aboutMe });
})

router.get('/portfolio', (req, res) => {
    res.render('portfolio', { portfolio });
})

router.get('/')

module.exports = router;
