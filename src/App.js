import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import Allrecipes from "./pages/Allrecipes";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path='/meal/:mealname' element={<Home />} />
          <Route path='/tag/:tagname' element={<Home />} />

          {/* RecipeDetails */}
          <Route path="/recipe/:id" element={<Recipe />} />

          {/* Recipe */}
          <Route path='/allrecipes' element={<Allrecipes />} />
          <Route path='/allrecipes/meal/:mealname' element={<Allrecipes />} />
          <Route path='/allrecipes/tag/:tagname' element={<Allrecipes />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
