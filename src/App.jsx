
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './HomePage/HomPageComponents'
import ProdectsPage from './prodectsPage/ProdectsPage.jsx'
import AboutPage from './aboutPage/AboutPage'
import LoginForm from './login/Login'


function App() {
  return (

    
    <Router> 
<Routes>

  <Route path ="/" element={<Home />}  />
  <Route path ="/ProdectsPage" element={<ProdectsPage />}  />
  <Route path = "/AboutPage" element= {<AboutPage/>} />
  

</Routes>
    </Router>
    
  );
};

export default App ;
