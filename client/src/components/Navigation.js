import React, {useState} from 'react';
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
    DropdownItem, Button,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {localStorageDelete} from "./handlers/localStorage";

const Navigation = ({user, setUser}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="md" color="light" fixed="top">
            <NavbarBrand  tag={Link} to="/main/">Home</NavbarBrand>
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
                            <DropdownItem tag={Link} to="/main/todoApp/">Todo App</DropdownItem>
                            <DropdownItem tag={Link} to="/main/shop/">Shop</DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    {!user ? (
                        <>
                            <NavItem>
                                <NavLink tag={Link} to="/sign-in">Sign in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/sign-up">Sign up</NavLink>
                            </NavItem>
                        </>
                    ):(
                        <NavItem>
                            <NavLink href="#" onClick={(e) => {
                                e.preventDefault();
                                setUser(null)
                                localStorageDelete('user')
                            }}>Sign out</NavLink>
                        </NavItem>
                    )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;
