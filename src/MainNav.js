import {useEffect, useRef, useLayoutEffect} from "react";
import {ReactComponent as CryptoMarketLogo} from "./image/logo.svg";

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
     
            console.log(window.scrollY);
            // Top of Page
            if(window.scrollY <= navBarHeight){
                containerRef.current.classList.remove("navbar--fadeIn");
                containerRef.current.classList.add("navbar--fadeOut");

            }else{
                containerRef.current.classList.remove("navbar--fadeOut");
                containerRef.current.classList.add("navbar--fadeIn");
     
            }
        }

        window.addEventListener("scroll", handleScroll);


        // Clean up code - remove event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[])

    return(

        <header ref={containerRef}  className="navbar navbar_fadeOut fixed-top container-fluid">

            <div className="row w-100 m-auto">
                <div className="col-12 d-flex justify-content-between">
                    <div className="navbar__logo">
                      <CryptoMarketLogo />

                    </div>

                    <div className="navbar__links d-flex justify-content-center">
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

}
export default MainNav;