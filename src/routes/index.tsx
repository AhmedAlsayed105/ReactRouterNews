
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Content from "../Pages/Content";
import LayOut from "../layout/LayOut";
import LayOutLearn from "../Learn/LayOutLearn";
import DosReact from "../Learn/DosReact";
import Installation from "../Learn/Installation";
import QuickStart from "../Learn/QuickStart";
import PrivetRoute from "../Auth/PrivetRoute";
import Login from "../Pages/Login";
import HandelErrRout from "../Auth/Error/HandelErrRout";
import PageErr404 from "../Auth/Error/PageErr404/PageErr404";

const IsLoginOrNo = true

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    {/* layout Main */}
    <Route path="/" element={<LayOut/>}  errorElement={<HandelErrRout/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="login" element={
        <PrivetRoute IsLogin={!IsLoginOrNo} pathComponent="/content">
          <Login/>
        </PrivetRoute>
      } />
      <Route path="content" element={
        <PrivetRoute IsLogin={IsLoginOrNo} pathComponent="/login" >
          <Content />
        </PrivetRoute>
      } />
    </Route>
{/* layout Learn */}

    <Route path="/learn" element={<LayOutLearn/>}>
    <Route path="Installation" element={<Installation/>}/>
    <Route path="QuickStart" element={<QuickStart />}/>
    <Route path="DosReact" element={<DosReact/>}/>
    </Route>










      {/* path name wrong  show page 404 */}
    {/* Route Page 404    */}
    <Route path="*" element={<PageErr404/>} />
    </>
  ));

export default router
