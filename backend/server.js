import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import User from './models/userModel.js';

const app = express();

try {
  mongoose.connect(
    // eslint-disable-next-line no-undef
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    () => {
      console.log('connected to the database');
    },
    (e) => console.log(e),
  );
} catch (err) {
  console.log(err.message);
}
let user = new User({
  name: 'ali',
  email: 'ali@gmail.com',
  password: '125532',
  isAdmin: true,
});
user
  .save()
  .then(() => console.log('data saved'))
  .catch((err) => console.log(err.message));
app.get('/', (req, res) => {
  res.send('server is ready');
});

app.use('/api/users', userRouter);
app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
