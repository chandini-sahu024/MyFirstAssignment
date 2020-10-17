const express = require('express'); 
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {  
    res.statusCode =200;
    res.setHeader('Content-type', 'text/plain'); 
    next(); 
})
.get((req, res, next) => {  
    res.end('Will send all the promotion to you!');
})
.post((req, res, next) => { 
    res.end('Will add all the promotion: ' + req.body.name + ' With details ' +  req.body.description); 
})
.put((req, res, next) => {
    res.statusCode = 403; 
    res.end('PUT operation not supported on /promotion'); 
})
.delete((req, res, next) => {  
    res.end('Deleting all the promotion!');
});

promoRouter.route('/:promoId')
.get((req, res, next) => {   
    res.end('Will send details of the proomotion:' + req.params.promohId + ' to you');
    
})

.post((req, res, next) => { 
    res.statusCode = 403; 
    res.end('Post operation not supported on /promotion' + req.params.promoId); 
})
.put((req, res, next) => {
    res.write('Updating the promotion:' + req.params.promoId + '\n');  
    res.end('Will update the promotion: ' + req.body.name + 
       ' With details: ' +req.body.description); 
})
.delete( (req, res, next) => {  
    res.end('Deleting promotion: ' + req.paramspromoId);
});

module.exports = promoRouter;