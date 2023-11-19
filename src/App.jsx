import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Resume from  './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './Components/Contact'
import Header from './Components/Header'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
// let counter = 10

// setTimeout(() => {
//   document.querySelector('#counter').textContent = counter
//   counter --

// }, 1000)
 const renderPage = () => {
   if(currentPage === 'Home') {
     return <Home />
   }
    if(currentPage === 'Resume') {
      return <Resume />
    }
    if(currentPage === 'Portfolio') {
      return <Portfolio />
    }     
    if(currentPage === 'Contact') {
      return <Contact />
    }
 }

 const handlePageChange = (page) => setCurrentPage(page)
  
    return (
      <>
       <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <main>
          {renderPage()}
        </main>
      </>
    );
}


export default App
