import './index.scss';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {



    return (

        <Navbar className="navbar-custom fixed-top" expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-end list">
                    <NavLink className='link' to="/">Home</NavLink>
                    <NavLink className='link' to="/about">About</NavLink>
                    <NavLink className='link' to="/portfolio">Portfolio</NavLink>
                    <NavLink className='link' to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar >




        // <Navbar className="navbar-custom fixed-top navbar-expand-lg">



        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="ms-auto mb-2 mb-lg-0 d-flex align-items-end">
        //             <Nav.Item >
        //                 <NavLink className="active" aria-current="page" to="#">Home</NavLink>
        //             </Nav.Item>
        //             <Nav.Item >
        //                 <NavLink to='/about' >About</NavLink>
        //             </Nav.Item>
        //             <Nav.Item >
        //                 <NavLink to="#">Portfolio</NavLink>
        //             </Nav.Item>
        //             <Nav.Item >
        //                 <NavLink to="#">Contact</NavLink>
        //             </Nav.Item>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar >
    )
}

export default NavBar;