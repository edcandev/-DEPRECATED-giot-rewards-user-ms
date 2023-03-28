import express from 'express';
import userRouter from './routes/user'

const app = express();

app.use(express.json());
app.use('api/user',userRouter);

// var userIdentifier : number;

const PORT = 3000; // No usamos process env porque corre en un container


app.listen(PORT,() => { console.log("Running at localhost:" + PORT)});