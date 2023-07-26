import React from "react";
import  "./style/App.css"
import "./style/Header.css"
import "./style/footer.css"
import "./style/Home.css"
import "./style/services.css"
import "./style/mediaquary.css"

import Header from "./component/Header";
import Footer from "./component/footer";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Conect from "./component/Conect";
import Brands from "./component/Brands";
import Services from "./component/Services";



 function App(){
    return(
            <Router>

                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/#about" element={<About/>}/>
                    <Route path="/#brands" element={<Brands/>}/>
                    <Route path="/Services" element={<Services/>}/>
                    <Route path="/#conect" element={<Conect/>}/>
                </Routes>
                <Footer/>
            </Router>
    )
}
export default App;