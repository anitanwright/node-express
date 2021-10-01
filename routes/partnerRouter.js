const express = require('express');
const partnerRouter = express.Router();

// single statement that handles all the routes to partner endpoints
partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all partners');
})

//single statement with endpoints for specific campsites with parterID params

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => { 
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => { 
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});


module.exports = partnerRouter;