import logo from "../../logo.svg";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
    return (
        <div id="header_holder">
            <img id="header_logo" src={logo} alt="logo"></img>
            <div id="header_title">MD Bookkeeping</div>
            <div id="header_nav">
                <div className="header_navItem">
                    <Link className="header_navLink" to={"/"}>
                        Home
                    </Link>
                </div>
                <div className="header_navItem">
                    <Link className="header_navLink" to={"/contact"}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
