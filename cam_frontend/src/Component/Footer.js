import React from 'react';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';


// const baseUrl = 'http://127.0.0.1:8000/api';

function Footer() {
    // const [ pagesData, setPagesData] = useState([]);

    // useEffect(() => {

    //     try {
    //             axios.get(baseUrl + '/pages/')
    //             .then((res) => {
    //                 setPagesData(res.data)

    //             });

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    return (

        <div className='App mt-3'>

            <footer className='py-3 my-1 bg-primary '>

                <ul className='nav justify-content-center text-white border-bottom pb-3 mb-3 '>

                    <li className='nav-item'><Link to="/" className='nav-link px-2 text-white '>Home</Link></li>
                    <li className='nav-item'><Link to="/contact" className='nav-link px-2 text-white '>Contect US</Link></li>
                </ul>
                <ul>
                <Link to='/'><i  class="bi bi-twitter fa-2x"></i></Link>
                     &nbsp; &nbsp; &nbsp; 
                     <Link to='/'><i class="bi bi-instagram fa-2x"></i></Link>
                     &nbsp; &nbsp; &nbsp; 
                     <Link to='/'><i class="bi bi-whatsapp fa-2x"></i></Link>
                     &nbsp; &nbsp; &nbsp; 
                     <Link to='/'><i class="bi bi-facebook fa-2x"></i></Link>
                </ul>
                <b> © 2022 Copyright: <Link className='text-white' to='/'>Cammra Web </Link></b>
            </footer>
        </div>
    );
}

export default Footer;