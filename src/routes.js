import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Record from './pages/Record';
export function RoutesApp() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path='/registro' element={<Record />} />
      </Routes>
    </BrowserRouter>
  );
}
