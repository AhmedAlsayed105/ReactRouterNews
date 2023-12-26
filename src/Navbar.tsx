import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className=" " style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        listStyle:"none",
        fontSize:"20px"
    }}>
    <li className="" ><NavLink to="/">Home</NavLink></li>
    <li className=""><NavLink to="/about">About</NavLink></li>
    <li className="" ><NavLink to="/content"> Content</NavLink></li>
    <li className="" ><NavLink to="/learn"> Learn</NavLink></li>
    </ul>
  )
}
