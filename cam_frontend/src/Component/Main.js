import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { Routes as Switch, Route } from 'react-router-dom';
import "../App.css"
import Service from './Service';


function Main() {
    return (
      <div className="App">
        <Header />
        <Switch>
            
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />

            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/page/:page_id/:page_slug" element={<Page />} /> */}

        </Switch>
        <Footer />
      </div>

  );
}



export default Main;
