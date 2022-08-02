import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route index element = {<Home/>}></Route>
            <Route path="login" element = {<Login/>}></Route>
            <Route path="users">
              <Route index element = {<List/>}></Route>
              <Route path=":userId" element = {<Single/>}></Route>
              <Route path="new" element = {<New inputs ={userInputs} title = "Add new User"/>}></Route>
            </Route>
            <Route path="products">
              <Route index element = {<List/>}></Route>
              <Route path=":productId" element = {<Single/>}></Route>
              <Route path="new" element = {<New inputs = {productInputs} title = "Add new Product"/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
