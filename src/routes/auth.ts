import { Router, Request, Response } from 'express';
const { User } = require('../db');

const server = Router();

server.post('/register', (req: Request, res: Response) => {
  const { firstname, surname, username, email, password } = req.body;
  if (!firstname && !surname && !username && !email && !password) {
    return res.sendStatus(400);
  }
  User.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400));
});

server.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  User.findOne({
    where: { username, password },
  })
    .then((user: any) => {
      if (user) {
        return res.sendStatus(200);
      }
      res.sendStatus(404);
    })
    .catch((err: any) => {
      console.error(err);
      res.sendStatus(400);
    })
});

export default server;