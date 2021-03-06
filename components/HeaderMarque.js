import React from 'react';
import {useRouter} from "next/router";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

const HeaderMarque = () => {

    const router = useRouter();

    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className='logoContainer'><div className="img-marques-header-container">
                <img src={'/logo.png'} alt=""/>
            </div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto expandNav">


                    <Nav.Link href="#"><li className="nav-item active">
                        <a className="nav-link links-text" href="#">Qui sommes-nous ?</a>
                    </li></Nav.Link>
                    <Nav.Link href="javascript:void(0)"><li className="nav-item active">
                        <a className="nav-link links-text" href={"/comment-ca-marche"}>Comment ça marche ?</a>
                    </li></Nav.Link>
                    <Nav.Link href="javascript:void(0)"><li>
                        <button className="brief-button-container petit-brief" onClick={() => router.push('/deposer-un-brief')}>
                            <p>Déposer un brief</p>
                        </button>
                    </li></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderMarque;