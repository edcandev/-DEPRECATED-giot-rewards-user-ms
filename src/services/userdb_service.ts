import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { dbInfo } from '../types/types';
import { User } from '../models/user_model';

const userDatabasePath :string = path.join(__dirname,'../database/');

export function createUserDb (identifier :string) : string { // Crea la base de datos del usuario
    new Database(userDatabasePath.concat(identifier).concat('_user.sqlite'));
    return dbInfo.OK;
}

export function createUserDataTable(identifier :string) :string { // Crea la tabla de datos del usuario
    if(checkExistence(identifier)) {
        const db = Database(userDatabasePath.concat(identifier).concat('_user.sqlite'));

        db.prepare('CREATE TABLE IF NOT EXISTS user_tbl (identifier INTEGER, firstname TEXT NOT NULL,lastname TEXT NOT NULL, type TEXT NOT NULL, points INTEGER NOT NULL, email TEXT NOT NULL, phone TEXT NOT NULL);')
        .run();

        return dbInfo.OK;
    } else {
        return dbInfo.ERROR;
    }   
}

export function defineUserData (userData : User) {
    if(checkExistence(userData.identifier.toString())) {
        const db = Database(userDatabasePath.concat(userData.identifier.toString()).concat('_user.sqlite'));

        db.prepare(`INSERT INTO user_tbl (identifier, firstname, lastname, type, points, email, phone) VALUES ('${userData.identifier.toString()}','${userData.firstname}','${userData.lastname}','${userData.userType}','${userData.points}','${userData.email}','${userData.phone}');`)
        .run();

        return dbInfo.OK;

    } else {
        return dbInfo.ERROR;
    }
}

export function getUserData(identifier:number) : string[] {
    if(checkExistence(identifier.toString())) {
        const db = Database(userDatabasePath.concat(identifier.toString()).concat('_user.sqlite'));
        
        const stmt = db.prepare(`SELECT * FROM user_tbl;`);
        stmt.run();
        return stmt.all();
    } else { 
        return [dbInfo.ERROR];
    }
}

export function checkExistence(identifier:string) {
    return fs.existsSync(userDatabasePath.concat(identifier).concat('_user.sqlite'));
}