const express = require('express');
const path = require('path');  // <-- added this line
const app = express();
const PORT = 3000;

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));    

app.get('/', (req, res) => {
    res.render('static'); // make sure static.ejs is inside the 'views' folder
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
