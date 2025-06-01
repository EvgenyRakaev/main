import React, {useState} from 'react';
import testImage from "../images/test-img.svg";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Input,
} from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="md" color="light" fixed="top">
            <NavbarBrand href="/main/">Home</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/EvgenyRakaev/main">
                            GitHub
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Projects
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem><NavLink href="/main/todoApp/">Todo App</NavLink></DropdownItem>
                            <DropdownItem><NavLink href="/main/shop/">Shop</NavLink></DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/main/sign-in">Sign in</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/main/signup">Sign up</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;
