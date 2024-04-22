import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//https://www.youtube.com/watch?v=-5X6r0oC0Og&list=PLBh9z20x5LUqfmToGINwM5GnDL9caB-Sn&index=16//
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";


//this is routes, for navigation
function App() {
  return (
    <Router>
      <Navbar />
      <main className="container main">
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
