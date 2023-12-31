const router = require('express').Router();

router.get('/login', (req, res) => {

    res.render('pages/login', { title: "Login" });
});

router.get('/home', (req, res) => {
    try {
        let userName = req.query.username;
        if (!userName) {
            res.redirect('/login');
        }
        res.render('pages/home', { title: "Home", user: userName });
    } catch (error) {
        res.status(500).json({ message: 'Login failed' });
    }
});



module.exports = router;
