const express = require('express');
const router = express.Router();   

router.get('/', (req, res) => {
    req.session.ban = true;
    res.render('index');
});

// niche diya gaya code check karne ke liye hai ki tum session ke thought aapko banned kar denge
// router.get('/checkban', (req, res) => {
//     console.log(req.session);
//     res.send("check kiya hai and console dekho");
// });

// Check This conditon
router.get('/checkban', (req, res) => {
            if(req.session.ban===true){
        res.send("you are ban");
    }
    else{
        res.send("you are not ban");
    }
});

router.get('/removeban',(req,res)=>{
    req.session.destroy(function(error){
        if(error) throw error;
        res.send("you are unbanned now");
    });
})

module.exports = router;
