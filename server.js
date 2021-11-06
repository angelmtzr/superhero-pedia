const express =  require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// ROUTER VARIABLES
const indexRouter = require('./routes/index');
//const steakRouter = require('./routes/steaks');

// TEMPLATING AND LAYOUT CONFIG
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ limit: '10mb', extended: false}));
app.use(express.json());

// ROUTERS
app.use('/', indexRouter);
//app.use('/steaks', steakRouter);

// LISTENING TO PORT 3000
app.listen(process.env.PORT || 3000);
