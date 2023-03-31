"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistence = exports.getUserData = exports.defineUserData = exports.createUserDataTable = exports.createUserDb = void 0;
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const userDatabasePath = path_1.default.join(__dirname, '../database/');
function createUserDb(identifier) {
    new better_sqlite3_1.default(userDatabasePath.concat(identifier).concat('_user.sqlite'));
    return "Transacci\u00F3n completada" /* dbInfo.OK */;
}
exports.createUserDb = createUserDb;
function createUserDataTable(identifier) {
    if (checkExistence(identifier)) {
        const db = (0, better_sqlite3_1.default)(userDatabasePath.concat(identifier).concat('_user.sqlite'));
        db.prepare('CREATE TABLE IF NOT EXISTS user_tbl (identifier INTEGER, firstname TEXT NOT NULL,lastname TEXT NOT NULL, type TEXT NOT NULL, points INTEGER NOT NULL, email TEXT NOT NULL, phone TEXT NOT NULL);')
            .run();
        return "Transacci\u00F3n completada" /* dbInfo.OK */;
    }
    else {
        return "Error del servidor" /* dbInfo.ERROR */;
    }
}
exports.createUserDataTable = createUserDataTable;
function defineUserData(userData) {
    if (checkExistence(userData.identifier.toString())) {
        const db = (0, better_sqlite3_1.default)(userDatabasePath.concat(userData.identifier.toString()).concat('_user.sqlite'));
        db.prepare(`INSERT INTO user_tbl (identifier, firstname, lastname, type, points, email, phone) VALUES ('${userData.identifier.toString()}','${userData.firstname}','${userData.lastname}','${userData.userType}','${userData.points}','${userData.email}','${userData.phone}');`)
            .run();
        return "Transacci\u00F3n completada" /* dbInfo.OK */;
    }
    else {
        return "Error del servidor" /* dbInfo.ERROR */;
    }
}
exports.defineUserData = defineUserData;
function getUserData(identifier) {
    if (checkExistence(identifier.toString())) {
        const db = (0, better_sqlite3_1.default)(userDatabasePath.concat(identifier.toString()).concat('_user.sqlite'));
        const stmt = db.prepare(`SELECT * FROM user_tbl;`);
        stmt.run();
        return stmt.all();
    }
    else {
        return ["Error del servidor" /* dbInfo.ERROR */];
    }
}
exports.getUserData = getUserData;
function checkExistence(identifier) {
    return fs_1.default.existsSync(userDatabasePath.concat(identifier).concat('_user.sqlite'));
}
exports.checkExistence = checkExistence;
