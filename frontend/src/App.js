import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookScreen from './screens/BookScreen';
import NewBook from './screens/dashboard/books/create';
import BooksList from './screens/dashboard/books/list';
import Dashboard from './screens/dashboard/Dashboard';
import Home from './screens/Home';
import Login from './screens/Login';
import Subscribe from './screens/Subscribe';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<BookScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='books' element={<BooksList />} />
          <Route path='books/new' element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
