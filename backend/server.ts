import cors from 'cors';
import express, {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import {Server} from 'http';
import prisma from './src/client';

const app = express();
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({extended: true}));

// enable cors
app.use(cors());
app.options('*', cors());

prisma.$connect().then(() => {
  app.listen(3000, () => {
    console.log(`Listening to port 3000`);
  });
});

app.get('/api/ap', async (req: Request, res: Response) => {
  const result = await prisma.user.findMany();
  res.send(result);
});

app.get('/api/create', async (req: Request, res: Response) => {
  const result = await prisma.user.create({
    data: {
      email: 'test',
      name: 'test',
    },
  });
  res.send(result);
});
