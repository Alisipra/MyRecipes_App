import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeId from "./components/RecipeId";
import Category from "./components/Category";
import SearchElement from "./components/SearchElement";
function App() {
  return (
    <>
      <div className="bg-black text-white">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:idMeal" element={<RecipeId />} />
            <Route path="/category/:catName" element={<Category />} />
            <Route path="/search/:searchTerm" element={<SearchElement />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
