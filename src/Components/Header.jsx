import React from "react";
import NavTop from "./Nav";
import Nav from 'react-bootstrap/Nav';

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header> 
            <h1 className="h1">Nysa Trejo</h1>
            <NavTop currentPage={currentPage} handlePageChange={handlePageChange} />

        </header>
    )
}

export default Header;


// const props = {
//     currentpage: 'currentPage',
//     handlePageChange: 'handlePageChange'
// }