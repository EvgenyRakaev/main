//imports
require('dotenv').config();
const db = require('./src/dbConnection/dbConnection');
const express = require('express');
const cors = require('cors');
const {hash, compare} = require("bcrypt");


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

app.post('/api/signIn', async (req, res) => {
    const {email, password} = req.body;

    try {
        const result = await db.query('SELECT * FROM "user" WHERE email = $1', [email]);

        const user = result.rows[0];

        if (!user || !await compare(password, user.password)) {
            return res.status(401).json({error: 'Invalid e-mail or password'});
        }

        res.json({message: 'Login successful', user: {id: user.id, role: user.role}});
    } catch (err) {
        console.error('Login error:', err.message);
        res.status(500).json({error: 'Server error'});
    }

})

app.post('/api/signUp', async (req, res) => {
    const {email, password, firstName, lastName} = req.body;

    try{
        const result = await db.query('SELECT * FROM "user" WHERE email = $1', [email] );

        if (result.rows.length !== 0) {
            return res.status(401).json({error: 'This e-mail already exists'});
        } else {
            await db.query(`
                INSERT INTO "user" (email, password, first_name, last_name, role, login) 
                VALUES ($1, $2, $3, $4, $5, $6)
            `, [email, await hash(password, 10), firstName, lastName, 'user', null])
            res.status(201).json({message: 'User created successfully'})
        }
    } catch(err) {
        console.error('Sign Up error:', err.message);
        res.status(500).json({error: err.message});
    }
})

app.get('/api/task', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM "entity_task"')
        res.json(result.rows);
    } catch (err) {
        if (err.code === '42P01') {
            console.log('There is no task table in the database, creating...')
            await db.query(`
                CREATE TABLE "entity_task"
                (
                    id        SERIAL PRIMARY KEY,
                    title     TEXT NOT NULL,
                    completed BOOLEAN DEFAULT FALSE
                )
            `);
            res.json([]);
        } else {
            res.status(500).send('Server error');
        }
    }
})

app.post('/api/task', async (req, res) => {
    const {title} = req.body;
    try {
        const result = await db.query(`
            INSERT INTO "entity_task" (title, completed)
            VALUES ($1, $2) RETURNING *
        `, [title, false])

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.log('Failed to create task', err);
        res.status(500).json({error: 'Failed to create task'});
    }
})

app.patch('/api/task/:id', async (req, res) => {
    const {id} = req.params;
    const {title, completed} = req.body;

    if (typeof completed === 'boolean') {

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