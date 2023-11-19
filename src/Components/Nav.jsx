import React from 'react'
import Nav from 'react-bootstrap/Nav';



const NavTop = ({ currentPage, handlePageChange }) => {
  return (
    <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="#home"onClick={() => handlePageChange('Home')} 
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</Nav.Link>
     {/* This is a conditional (ternary) operator that checks to see if the current page is "Home"
     If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link' */}
           
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='#resume' onClick={() => handlePageChange('Resume')} eventKey="link-1"
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}eventKey="link-2"
       className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
       >Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}eventKey="link-3"
       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavTop;







