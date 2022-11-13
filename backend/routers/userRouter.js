import express from 'express';
import expresAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();
userRouter.get('/seed', async (req, res) => {
  const createdUsers = await User.find({});
  res.send({ createdUsers });
});

userRouter.get(
  '/one',
  expresAsyncHandler(async (req, res) => {
    await User.insertMany(data.users);
    res.send('data inserted');
  }),
);

export default userRouter;
