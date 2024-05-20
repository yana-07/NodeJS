const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const mainRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

const app = express();

app.engine(
  'hbs',
  expressHbs({
    defaultLayout: 'main-layout',
    //default folder - does not need to be set
    layoutsDir: 'views/layouts/',
    // has to be set for recognition of the layout if we are not using the default extension of handlebars
    extname: 'hbs',
  })
);

app.set('view engine', 'hbs');
//app.set('view engine', 'pug');
// can be omitted, since 'views' is the default folder
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(usersRoutes);
app.use(mainRoutes);

app.listen(3000);