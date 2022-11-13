import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookScreen from './screens/BookScreen';
import Dashboard from './screens/Dashboard';
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
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
