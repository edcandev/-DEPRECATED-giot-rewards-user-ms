import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import userRouter from './routes/user_route';
import * as userDbServices from './services/userdb_service';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter);


const userIdentifier = process.env.USER_IDENTIFIER?.toString();
if(userIdentifier) {
    const identifier:string = userIdentifier;
    userDbServices.createUserDb(identifier);
    userDbServices.createUserDataTable(userIdentifier);
}

// No usamos process env porque corre en un container
const PORT = process.env.PORT || 3001;

app.listen(PORT,() => { console.log("Running at localhost:" + PORT)});