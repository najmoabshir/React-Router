import Feature from "./components/pages/Feature";

import{Routes,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from"./components/pages/Blog"

function App() {
  return  <Routes>
<Route  path= "/" element={<Home/> }/>
<Route path="/feature" element={<Feature/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/blog" element={<Blog/>}/>



  </Routes>
  
  
}

export default App;
