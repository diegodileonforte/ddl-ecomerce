import './styles.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidgetComponent from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const NavBarComponent = () => {
    return (
        <>
            <Navbar bg='danger' variant='dark' expand='sm'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <Link className='link' to={`/`}><Navbar.Brand className='d-flex justify-content-between align-items-center'><img src='../../images/logonav.png' alt='logo' width='50' height='50' /><h1 id='brand-name'>3 DIM</h1></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link>NOSOTROS</Nav.Link>
                            <NavDropdown title='PRODUCTOS' id='basic-nav-dropdown'>
                                <LinkContainer to='/category/deco'><NavDropdown.Item>DECO</NavDropdown.Item></LinkContainer>
                                <LinkContainer to='/category/gadget'><NavDropdown.Item>GADGET</NavDropdown.Item></LinkContainer>
                            </NavDropdown>
                            <Nav.Link>CONTACTO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidgetComponent />
                </div>
            </Navbar>
        </>
    )
}

export default NavBarComponent