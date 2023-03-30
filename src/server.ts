import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import userRouter from './routes/user_route';
//import userDbServices from './services/userdb_service';
import * as userDbServices from './services/userdb_service';

//import Database from 'better-sqlite3';
//import path from 'path';
//import fs from 'fs';

//const userDatabasePath :string = path.join(__dirname,'./database/userdb.sqlite');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter);

//userDbServices.start();

const userIdentifier : string = process.env.USER_IDENTIFIER || '201920732';

userDbServices.createUserDb(userIdentifier);
console.log(userDbServices.createUserDataTable(userIdentifier));

// var userIdentifier : number;

const PORT = process.env.PORT || 3001; // No usamos process env porque corre en un container

app.listen(PORT,() => { console.log("Running at localhost:" + PORT)});