"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
//const sqlite3 = require('sqlite3').verbose();
//import sqlite3 from 'sqlite3';
//const db = new sqlite3.Database(':memory:');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('api/user', user_1.default);
// var userIdentifier : number;
const PORT = 3000; // No usamos process env porque corre en un container
app.listen(PORT, () => { console.log("Running at localhost:" + PORT); });
