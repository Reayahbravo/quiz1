
//from knex-lab
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Route Requires
const postsRouter = require("./routes/posts");


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
// app.use('/users', usersRouter);

//will this help cannot GET?
app.get('/sign_in', (req, res) => {
res.render('sign_in');
});

app.post('/sign_in', (req, res) => {
res.redirect('/');
});

app.post("/sign_out", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

app.get('/', (req, res) => {
res.render('notes/clucks');
});

app.get('/clucks', (req, res) => {
res.render('notes/clucks');
});

app.get('/new', (req, res) => {
res.render('notes/new');
});

app.post('/new', (req, res) => {
res.redirect('/');
});


// Connect Routers to App
app.use("/notes", postsRouter);


module.exports = app;


