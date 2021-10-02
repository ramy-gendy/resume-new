import {
    NavLink
} from "react-router-dom";
import { motion } from "framer-motion";
function Header() {

    function MobileNav() {
        return (
            <motion.nav className="md:hidden bg-blue-400 py-1">
                <motion.ul className="grid grid-cols-4">
                    <motion.li className="grid place-items-center">
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
                    </motion.li>
                    <motion.li className="grid place-items-center">
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
                    </motion.li>
                    <motion.li className="grid place-items-center">
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
                    </motion.li>
                    <motion.li className="grid place-items-center">
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
                    </motion.li>
                </motion.ul>
            </motion.nav>
        )
    }

    function DesktopNav() {
        return (
            <motion.nav className="bg-blue-400 py-1" ref={containerRef}>
                <motion.ul className="hidden md:grid grid-cols-4">
                    <motion.li className="grid place-items-center">
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
                    </motion.li>
                    <motion.li className="grid place-items-center">
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
                    </motion.li>
                    <motion.li className="grid place-items-center">
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
                    </motion.li>
                    <motion.li className="grid place-items-center">
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
                    </motion.li>
                </motion.ul>
            </motion.nav>
        )
    }

    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    );
}

export default Header;