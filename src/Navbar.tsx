import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <ul className=" " style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        listStyle:"none",
        fontSize:"20px"
    }}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/content"> Content</Link></li>
    </ul>
  )
}
