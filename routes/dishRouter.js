const express = require('express'); 
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/:dishId')
.get((req, res, next) => {   
    res.end('Will send details of the dish:' + req.params.dishId + ' to you');
    
})

.post((req, res, next) => { 
    res.statusCode = 403; 
    res.end('Post operation not supported on /dishes' + req.params.dishId); 
})
.put((req, res, next) => {
    res.write('Updating the dish:' + req.params.dishId + '\n');  
    res.end('Will update the dish: ' + req.body.name + 
       ' With details: ' +req.body.description); 
})
.delete( (req, res, next) => {  
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;