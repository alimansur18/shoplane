import { Link } from "react-router-dom";
import axios from "axios";
import Constants from "../api/Constants";
import { useState, useEffect } from "react";

const Navbar = () => {

    const [categrories, setCategories] = useState([]);

    const fetchData = () => {
        axios.get(`${Constants.BASE_URL}categories`)
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <div>
            <nav className="">
                <hr />
                <div className="navbar-container">
                    <ul className="navbar" style={{gap:'8rem'}}>
                        <li key={'All'} className="nav-item active">
                            <Link className="nav-link" to={'/'}>All</Link>
                        </li>
                        {categrories.map((category) => (
                            <li key={category}>
                                <Link className="nav-link" to={'/products/category/' + category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr />
            </nav>
        </div>
    )
}

export default Navbar;