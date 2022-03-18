import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routers/userRouter';
const app = express();
mongoose.connect('mongodb://localhost/bookshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.get('/', (req, res) => {
  res.send('server is ready');
});
app.use('/api/users', userRouter);
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
