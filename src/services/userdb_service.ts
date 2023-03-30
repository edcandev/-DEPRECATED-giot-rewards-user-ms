import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { dbInfo } from '../types/types';
import { User } from '../models/user_model';

const userDatabasePath :string = path.join(__dirname,'../database/');

export function createUserDb (identifier :string) : any { // Crea la base de datos del usuario
    return new Database(userDatabasePath.concat(identifier).concat('_user.sqlite'));
}

export function createUserDataTable(identifier :string) :string { // Crea la tabla de datos del usuario
    if(checkExistence(identifier)) {
        const db = Database(userDatabasePath.concat(identifier).concat('_user.sqlite'));

        db.prepare('CREATE TABLE IF NOT EXISTS user_tbl (identifier INTEGER PRIMARY KEY, firstname TEXT NOT NULL,lastname TEXT NOT NULL, type TEXT NOT NULL, points INTEGER NOT NULL, email TEXT NOT NULL, phone TEXT NOT NULL);').run();
        return dbInfo.OK;
    } else {
        return dbInfo.ERROR;
    }   
}

export function defineUserData (identifier : number, userData : User) {
    if(checkExistence(identifier.toString())) {
        const db = Database(userDatabasePath.concat(identifier.toString()).concat('_user.sqlite'));

        db.prepare(`INSERT INTO user_tbl (identifier, firstname, lastname, type, points, email, phone) VALUES (${userData.identifier},${userData.firstname},${userData.lastname},${userData.userType},${userData.points},${userData.email},${userData.phone});`);


        return dbInfo.OK;

    } else {
        return dbInfo.ERROR;
    }
}

export function checkExistence(identifier:string) {
    return fs.existsSync(userDatabasePath.concat(identifier).concat('_user.sqlite'));
}