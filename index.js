const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('./app/routes/home.router.js')(app);
require('./app/routes/book.router.js')(app);

app.listen(3001, () => { 
    console.log("listen host 3001");
}) 