import {Navbar, Nav} from "react-bootstrap";

function MainNav(){

    return(
        
        <Navbar bg="dark" variant="dark" expand="lg" id="nav">
            <Navbar.Brand href="#home">CM</Navbar.Brand>

            <Nav className="ml-auto">
                <Nav.Link href="#features">Search</Nav.Link>
                <Nav.Link href="#cryptocurrency">About CryptoCurrency</Nav.Link>
                <Nav.Link href="#link3">Link3</Nav.Link>
            </Nav>
        </Navbar>
  
    
    );

}
export default MainNav;