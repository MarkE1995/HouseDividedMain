import React from "react";
import './index.css';
import Home from './routes/Home';
import TierLists from "./routes/TierLists";
import Project from './routes/Project';
import Discussions from "./routes/Discussions";
import {Route, Routes } from "react-router-dom";


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/tierlists' element={<TierLists />}/>
    <Route path='/project' element={<Project />}/>
    <Route path='/discussions' element={<Discussions />}/>
   </Routes>
   </>
  );
}

export default App;
