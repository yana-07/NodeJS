const express = require('express');
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'pug');
// can be omitted, since 'views' is the default folder
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(usersRoutes);
app.use(mainRoutes);

app.listen(3000);