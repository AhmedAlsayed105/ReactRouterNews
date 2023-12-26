import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function NavbarLearn() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "100px",
        }}
      >
        <ul
          className=" "
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            listStyle: "none",
            fontSize: "20px",
          }}
        >
          <li className="">
            <NavLink to="QuickStart"> QuickStart </NavLink>
          </li>
          <li className="">
            <NavLink to="Installation"> Installation</NavLink>
          </li>
          <li className="">
            <NavLink to="DosReact">DosReact</NavLink>
          </li>
        </ul>
        <div
          style={{
            background: "red",
            width:'100%',
            height:'80vh',
            borderRadius:"8px,"
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
