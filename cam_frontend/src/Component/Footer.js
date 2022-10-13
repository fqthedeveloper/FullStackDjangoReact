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

        <footer className='py-3 my-5 bg-primary'>
            <ul className='nav justify-content-center text-white border-bottom pb-3 mb-3 '>

                <li className='nav-item'><Link to="/" className='nav-link px-2 text-white '>Home</Link></li>

                {/* {pagesData && pagesData.map((row, index) =>
                  
                   <li className='nav-item'><Link to={'/page/${row.id}${row.url}'} key={index} className='nav-link px-2 text-white' >{row.title}</Link></li>
                )} */}
                 <li className='nav-item'><Link to="/contact" className='nav-link px-2 text-white '>Contect US</Link></li>
            </ul>
            <b> © 2022 Copyright: <a className='text-dark' href='/#'>Cammra Web </a> </b>
        </footer>
    );
}

export default Footer;