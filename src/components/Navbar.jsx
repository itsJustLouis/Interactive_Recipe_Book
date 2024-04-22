import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import { faHome, faList} from "@fortawesome/free-solid-svg-icons"

//this is for my navbar, these functions will show use states do decide when to show or not show the sidebar.
function Navbar(){
    const location = useLocation()
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }

    return(
        <>
        <header className="navbar container">
            <a href="#!" className="logo">Louie<span>'s </span>F<span>oo</span>dies</a>
            <nav className="nav-links">
                {links.map(link => (
                    <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                )) }
            </nav>
            <aside onClick={() => setShowSidebar(true)}  className= { showSidebar ? "sidebar-btn active" : "sidebar-btn"} >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </aside>
        </header>
        { showSidebar && <Sidebar close={closeSidebar} links={links}/> }
        </>
        //this is my nav bar
    )
}

export default Navbar;