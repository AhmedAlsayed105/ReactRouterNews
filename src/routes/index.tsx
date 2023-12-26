
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Content from "../Pages/Content";
import LayOut from "../layout/LayOut";
import LayOutLearn from "../Learn/LayOutLearn";
import DosReact from "../Learn/DosReact";
import Installation from "../Learn/Installation";
import QuickStart from "../Learn/QuickStart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* layout Main */}
    <Route path="/" element={<LayOut/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="content" element={<Content/>} />
    </Route>
{/* layout Learn */}

    <Route path="/learn" element={<LayOutLearn/>}>
    <Route path="Installation" element={<Installation/>}/>
    <Route path="QuickStart" element={<QuickStart />}/>
    <Route path="DosReact" element={<DosReact/>}/>
    </Route>
    </>
  ));

export default router
