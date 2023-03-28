import  express from 'express';

const router = express.Router();

router.get('/',(_req, res)=> {
    res.send('get user data')
});

router.get('/',(_req, res)=> {
    res.send('get user data')
});

export default router;