import {useEffect, useState, useRef, useLayoutEffect} from "react";

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

            <div class="row">
                <div class="col d-flex align-items-center justify-content-between">
                    <div class="main-nav__logo">
                        <img class="img-fluid" alt="alternate logo" src="https://icons-for-free.com/iconfiles/png/128/logo+react+react+js+icon-1320184811840217251.png" />
                    </div>

                    <div class="main-nav__links">
                        <ul>
                            <li><a href="#link1">Test1</a></li>
                            <li><a href="#link2">Test2</a></li>
                            <li><a href="#link3">Test3</a></li>
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