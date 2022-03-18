import { Routes, Route } from 'react-router-dom';
import BookScreen from './screens/BookScreen';
import Home from './screens/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<BookScreen />} />
      </Routes>
    </>
  );
}

export default App;
