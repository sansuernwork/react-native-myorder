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

app.get('/api/product', async (req: Request, res: Response) => {
  const result = await prisma.product.findMany();
  res.send(result);
});

app.post('/api/product', async (req: Request, res: Response) => {
  const data = req.body;
  const result = await prisma.product.create({
    data: data,
  });
  res.send(result);
});

app.patch('/api/product/:id', async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;
  const result = await prisma.product.update({
    where: {
      id: Number(id),
    },
    data: data,
  });
  res.send(result);
});

app.delete('/api/product/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await prisma.product.delete({
    where: {
      id: Number(id),
    },
  });
  res.send(result);
});
