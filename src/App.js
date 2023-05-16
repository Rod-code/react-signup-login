
import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login"
import Homepage from './components/Homepage';





function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
    {user && <Route path="/" exact element={<Homepage/>} />}
    <Route path="/signup" exact element={<Signup />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>
    </BrowserRouter>
    
  );
}

export default App;
