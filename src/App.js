import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from './pages/Login/Login';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
