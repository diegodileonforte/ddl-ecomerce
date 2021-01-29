import './styles.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../../images/logonav.png"
import CartWidgetComponent from '../CartWidget/CartWidget'

const NavBarComponent = () => {
    return (
        <>
            <Navbar bg="danger" variant="dark" expand="sm">
                <div className='container d-flex justify-content-between align-items-center'>
                    <Navbar.Brand className="d-flex justify-content-between align-items-center" href="#home"><img src={logo} alt="logo" width="50" height="50" /><h1 id="brand-name">3 DIM</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#link">NOSOTROS</Nav.Link>
                            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" >DEC0</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">GADGETS</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">CONTACTO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidgetComponent />
                </div>
            </Navbar>
        </>
    )
}

export default NavBarComponent