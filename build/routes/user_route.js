"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userdb_service_1 = require("../services/userdb_service");
const userdb_service_2 = require("../services/userdb_service");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send('get user data');
});
router.post('/data', (_req, res) => {
    //console.log(_req.body);
    const user = {
        identifier: _req.body.identifier,
        firstname: _req.body.firstname,
        lastname: _req.body.lastname,
        email: _req.body.email,
        phone: _req.body.phone,
        points: _req.body.points,
        userType: _req.body.userType
    };
    console.log(user);
    (0, userdb_service_1.defineUserData)(user);
    res.sendStatus(201);
});
router.get('/data', (req, res) => {
    const userIdentifier = req.body.identifier;
    //getUserData(req.body.identifier);
    res.send((0, userdb_service_2.getUserData)(userIdentifier));
});
exports.default = router;
