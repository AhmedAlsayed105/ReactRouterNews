
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Content from "../Pages/Content";
import LayOut from "../layout/LayOut";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<LayOut/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="content" element={<Content/>} />
    </Route>
    </>
  ));

export default router
