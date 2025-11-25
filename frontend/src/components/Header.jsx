import { Link } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext"
function Header() {
    let tabs = [
        { link: "/", label: "Home" },
        { link: "/hotel", label: "Hotels" },
        { link: "/contact", label: "Contact" },
        { link: "/about", label: "About" }
    ];

    // using userContext
    const user = useContext(UserContext);
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header>
                <h1>Hotel-Booking</h1>
                <nav>
                    <ul>
                        {
                            tabs.map(({ link, label }, index) => {
                                return <li key={index}>
                                    <Link to={link}>{label}</Link></li>
                            })
                        }
                    </ul>
                </nav>
                <div id="btns">
                    <button>Login</button>
                </div>

                {/* Mobile nav  */}
                <div id="mobile-nav" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ?
                        <RxCross2 className="menu-btn" />
                        :
                        <GiHamburgerMenu className="menu-btn" />}
                </div>
            </header>

            {/* Mobile navbar  */}
            {isMenuOpen && <div id="mobile-nav-container">
                <ul>
                    {
                        tabs.map(({ link, label }, index) => {
                            return <li key={index}>
                                <Link to={link} />{label}
                            </li>
                        })
                    }
                </ul>
                <div id="mobile-nav-btn">
                    <button>Login</button>
                </div>
            </div>}
        </>
    )
}

export default Header;