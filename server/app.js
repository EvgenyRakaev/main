//imports
require('dotenv').config();
const db = require('./src/dbConnection/dbConnection');
const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
    origin: '*', // ← разрешить всем

    // Чтобы разрешить только одному клиенту:
    // origin: 'http://localhost:3001',

    // Если нужно передавать cookie или авторизационные заголовки:
    // credentials: true
}));

// Пример API
app.get('/api/time', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        res.json({time: result.rows[0].now});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Хелсчек
app.get('/api/health', (req, res) => {
    res.json({status: 'ok'});
});

app.get('/api/user', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM "user"');
        res.json(result.rows);
    } catch (err) {
        console.error('❌ DB error:', err.message);
        res.status(500).json({error: 'Database query failed'});
    }
});

app.post('/api/login', async (req, res) => {
    const {login, password} = req.body;

    try {
        const result = await db.query('SELECT * FROM "user" WHERE login = $1', [login]);

        const user = result.rows[0];

        if (!user || user.password !== password) {
            return res.status(401).json({error: 'Invalid credentials'});
        }

        res.json({message: 'Login successful', user: {id: user.id, role: user.role}});
    } catch (err) {
        console.error('Login error:', err.message);
        res.status(500).json({error: 'Server error'});
    }

})

// 404
app.use((req, res) => {
    res.status(404).json({error: 'Not found'});

});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;