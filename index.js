// conexion a la base da datos postgreSql usando express 

const express = require('express');
const app = express();
require('dotenv').config()
// conexion a la base da datos postgreSql
// const pg = require('pg');
// const db = app.createConnection({
//     host: 'localhost',
//     user:'developer',
//     password: 'developer',
//     database: 'empleados'
// });

// conexion a la base da datos postgreSql
// db.connect((err) => {
//     if(err) throw err;
//     console.log('Connected to database');
// });

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my application'});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/` );
});