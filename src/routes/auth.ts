import { Router, Request, Response } from 'express';
const { User } = require('../db');

const server = Router();

server.post('/login', (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default server;