import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Arena from "./Game";
import Home from "./Home.tsx";
import Spaces from "./Spaces.tsx";
import Login from "./Login.tsx";


function App() {

  return (
    <>
    <Router>      
    <Routes>
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/game" element={<Arena />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
