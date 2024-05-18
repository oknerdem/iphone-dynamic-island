import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='*'
        element={<div className='text-sm'>404! Page not found.</div>}
      />
    </Routes>
  );
}

export default App;
