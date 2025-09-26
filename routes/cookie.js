const express = require('express');
const router = express.Router();   

router.get('/', (req, res) => {
    req.session.ban = true;
    res.render('index');
});

router.get('/checkban', (req, res) => {
    console.log(req.session);
    res.send("check kiya hai and console dekho");
});

module.exports = router;
