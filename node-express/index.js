const express = require('express');
const http = require('http');
const morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostname = 'localhost';
const port = 3000;
const app = express();
app.use(morgan('dev'));
app.use('/dishes', dishRouter);
app.use('/promo', promoRouter);
app.use('/leader', leaderRouter);
app.use(express.static(__dirname+ '/public'));
app.use((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/html');
    res.end('<html><body><h1>Hello World</h1></body></html>');
});
const server = http.createServer(app);
app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});