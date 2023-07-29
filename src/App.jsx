import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Character } from "./pages/Character";
import { useState } from "react";



function App() {

  const  [stateParts, setStateParts] = useState([])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setStateParts = {setStateParts}/>}/>
        <Route path="/Character" element={<Character parts={stateParts}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
