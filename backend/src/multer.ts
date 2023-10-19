import multer from 'multer';
import fs from 'fs';
import {v4} from 'uuid';
import path from 'path';
import {UTCArrayFormat} from './helper/time';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dhy = UTCArrayFormat();
    let dir = `${'./uploads'}/${dhy.year}/${dhy.month}/${dhy.date}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {recursive: true});
    }

    cb(null, dir);
  },
  filename: function (req: any, file: any, cb: any) {
    cb(null, v4() + path.extname(file.originalname));
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'application/octet-stream'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Image uploaded is not of type jpg/jpeg or png'), false);
  }
};

export default multer({storage: storage, fileFilter: fileFilter});
