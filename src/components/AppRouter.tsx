import { Route, Routes, redirect } from 'react-router-dom';
import { Event } from '../pages/event';
import { Login } from '../pages/login';



const AppRouter = () => {
    const auth = false
  return (
    auth?
    <Routes>
        <Route path='/' element={<Event/>}></Route>
    </Routes>
    :
    <Routes>
        <Route path="/Login" element={<Login/>}></Route>
    </Routes>
  )
};

export default AppRouter;
