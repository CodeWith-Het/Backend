const express = require('express');
const app = express();
const PORT = 5001;

app.use(express.static('Day 01'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
