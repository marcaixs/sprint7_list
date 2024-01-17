import React from 'react';
import './App.css'
import NausList from './components/NausList';
import { NausProvider } from './context/NausContext';
import Header from './components/Header';
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";


const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="starships" element={<><Header></Header><NausProvider>
              <div>
                <NausList />
              </div>
            </NausProvider></>} />
          
        </Routes>
    </>
  );
};

export default App;