import { motion } from "framer-motion";
import {
    NavLink
} from "react-router-dom";

function Navbar() {

    return (
        <motion.nav className="navbar">
            <NavLink
                to="/"
                exact={true}
                activeStyle={{
                    textDecoration: "underline",
                    color: "white"
                }}
                style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                Home
            </NavLink>
            <NavLink
                to="/about"
                activeStyle={{
                    textDecoration: "underline",
                    color: "white"
                }}
                style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                About
            </NavLink>
            <NavLink
                to="/personal"
                activeStyle={{
                    textDecoration: "underline",
                    color: "white"
                }}
                style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                Personal Projects
            </NavLink>
            <NavLink
                to="/contact"
                activeStyle={{
                    textDecoration: "underline",
                    color: "white"
                }}
                style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                Contact Me
            </NavLink>
            <NavLink
                to="/resume"
                activeStyle={{
                    textDecoration: "underline",
                    color: "white"
                }}
                style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                Resume
            </NavLink>
        </motion.nav>
    )
}

export default Navbar;