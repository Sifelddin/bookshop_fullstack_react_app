import 'dotenv/config';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import bodyParser from 'body-parser';
import bookRouter from './routers/bookRouter.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

try {
  mongoose.connect(
    // eslint-disable-next-line no-undef
    process.env.MONGO_URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => {
      console.log('connected to the database');
    },
    console.log,
  );
} catch (err) {
  console.log(err.message);
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('server is ready');
});

app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);
app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
