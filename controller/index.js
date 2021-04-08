const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/about-me', (req, res) => {
    res.render('about-me');
})

router.get('/portfolio', (req, res) => {
    res.render('portfolio');
})

router.get('/')

module.exports = router;
