import  express from 'express';
import { defineUserData } from '../services/userdb_service'
import { User } from '../models/user_model';
const router = express.Router();

router.get('/',(_req, res)=> {
    res.send('get user data')
});

router.post('/post/data',(_req, res) => {
    //console.log(_req.body);

    const user : User = {
        identifier:_req.body.identifier,
        firstname:_req.body.firstname,
        lastname:_req.body.lastname,
        email:_req.body.email,
        phone:_req.body.phone,
        points:_req.body.points,
        userType:_req.body.userType
    }

    console.log(user);

    defineUserData(user.identifier,user);
    
    res.sendStatus(201);
});


export default router;