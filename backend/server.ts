import cors from 'cors';
import express, {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import {Server} from 'http';
import prisma from './src/client';
const multer = require('multer');
var fs = require('fs');
var path = require('path');

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, './uploads');
  },
  filename: function (req: any, file: any, cb: any) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({storage: storage}).single('file');

const app = express();
app.use('/assets', express.static(path.resolve('uploads')));
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
  const result = await prisma.product.findMany({
    orderBy: {
      id: "desc"
    }
  });
  res.send(result);
});

app.post('/api/product', upload, async (req: Request, res: Response) => {
  const data = req.body;
  const fileName = req.file?.filename;
  const formData = {
    ...data,
    price: parseInt(data.price),
    stock: parseInt(data.stock),
    cost_price: parseInt(data.cost_price),
  };
  const result = await prisma.product.create({
    data: {
      ...formData,
      image: fileName,
    },
  });
  res.send(result);
});

app.patch('/api/product/:id', upload, async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const fileName = req.file?.filename;
  const formData = {
    ...data,
    price: parseInt(data.price),
    stock: parseInt(data.stock),
    cost_price: parseInt(data.cost_price),
  };

  let result;

  if (fileName) {

    result = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        ...formData,
        image: fileName,
      },
    });
  } else {
    result = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        ...formData,
      },
    });
  }
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
