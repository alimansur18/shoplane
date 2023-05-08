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
            <nav class="">
                <hr />
                <div class="navbar-container">
                    <ul class="navbar">
                        <li class="nav-item active">
                            <Link class="nav-link" to={'/'}>All</Link>
                        </li>
                        {categrories.map((category) => (
                            <li>
                                <Link class="nav-link" to={'/products/category/' + category}>
                                    {category}
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