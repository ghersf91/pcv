import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Inicio
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Nosotros
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contáctanos
                    </NavLink>
                    <NavLink to="/experiences" activeStyle>
                        Experiencias
                    </NavLink>
                    <NavLink to="/testimonials" activeStyle>
                        Testimonios
                    </NavLink>
                    <NavLink to="/partners" activeStyle>
                        Aliados
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;