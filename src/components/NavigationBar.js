import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div id="sticky">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand style={{ color: 'white' }} href="/">Cupcake Shop</NavbarBrand>
                <NavbarToggler color="dark" style={{ color: 'white' }} onClick={toggle} />
                <Collapse style={{ color: 'white' }} isOpen={isOpen} navbar>
                    <Nav className="mr-auto" style={{ color: 'white' }} navbar>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle style={{ color: 'white' }} nav caret>
                                Options
               </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem style={{ color: 'black' }} tag={Link} to="/cupcakes">
                                    Cupcakes
                 </DropdownItem>
                                <DropdownItem tag={Link} to="/frosting">
                                    Frosting
                 </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavItem style={{ color: 'white' }} tag={Link} to="/contact">Contact</NavItem>
                </Collapse>
            </Navbar>
        </div>
    )
}


export default NavigationBar;

