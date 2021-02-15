import {useEffect, useState, useRef, useLayoutEffect} from "react";
import logo from "./image/logo.svg";

function MainNav(){

    // set variable isSticky to false, and function setSticky
    const containerRef = useRef(null);

    useEffect( () => {
        console.log("useEffect - ");
    }, []);

    useLayoutEffect( () => {

        // remove bg-dark initially
        containerRef.current.classList.remove("bg-dark");

        // set isSticky based on window y-position
        const handleScroll = () =>{

            const navBarHeight = containerRef.current.getBoundingClientRect().height;
     
            // Top of Page
            if(window.scrollY <= navBarHeight){
                containerRef.current.classList.remove("main-nav--fadeIn");
                containerRef.current.classList.add("main-nav--fadeOut");

            }else{
                containerRef.current.classList.remove("main-nav--fadeOut");
                containerRef.current.classList.add("main-nav--fadeIn");
     
            }
        }

        window.addEventListener("scroll", handleScroll);


        // Clean up code - remove event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[])

    return(

        <header ref={containerRef}  className="main-nav main-nav--fadeOut fixed-top container-fluid">

            <div className="row">
                <div className="col d-flex justify-content-between">
                    <div className="main-nav__logo">
                        <img className="img-fluid" alt="alternate logo" src={logo} />
                    </div>

                    <div className="main-nav__links d-flex justify-content-center">
                        <ul>
                            <li><a href="#link1">Link 1</a></li>
                            <li><a href="#link2">Link 2</a></li>
                            <li><a href="#link3">Link 3</a></li>
                        </ul>
                    </div>
                </div>
            </div> 
        </header>

    );

           /*
        <Navbar ref={containerRef} expand="lg" id="nav" className="fixed-top">
            <Navbar.Brand href="#home">CM</Navbar.Brand>

            <Nav className="ml-auto">
                <Nav.Link href="#features">Search</Nav.Link>
                <Nav.Link href="#cryptocurrency">About CryptoCurrency</Nav.Link>
                <Nav.Link href="#link3">Link3</Nav.Link>
            </Nav>
        </Navbar>
        */

}
export default MainNav;