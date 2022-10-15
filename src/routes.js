import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
export function RoutesApp() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<SignIn />} />
        <Route path="/cadastro/*" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
