import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBooks } from '../actions/bookAction';
const Home = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  return <div className='text-red-500'>home page</div>;
};

export default Home;
