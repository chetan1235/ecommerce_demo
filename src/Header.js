import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Header.css';
import Sunglasses from "./Sunglasses";

function Header(){


    return (
        <div className="col-md-6">
                <Router>
                <ul className="menu" style={{ display: "flex", listStyleType: "none" }}>
                <li>
                    <Link to="/sunglasses">Sunglasses</Link>
                </li>
                <li>
                    <Link to="/information">WayFarer</Link>
                </li>
                <li>
                    <Link to="/information">Cat Eye</Link>
                </li>
                <li>
                    <Link to="/information">Pilot Style</Link>
                </li>
                <li>
                    <Link to="/information">Blog</Link>
                </li>
                <li>
                    <Link to="/information">More</Link>
                </li>

                </ul>

                <hr />

                <Routes>
                    <Route path="/sunglasses" element={<Sunglasses />} />


                </Routes>
                </Router>      

      </div>

    )
}

export default Header;