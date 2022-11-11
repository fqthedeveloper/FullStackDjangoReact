import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {AnimatedSocialIcon} from 'react-animated-social-icons'


const baseUrl = 'http://127.0.0.1:8000/api';

function Footer() {
    const [ sociallinkData, setSocialLink] = useState([]);

    useEffect(() => {

        try {
                axios.get(baseUrl + '/sociallink/')
                .then((res) => {
                    setSocialLink(res.data)

                });

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (

        <div className='App mt-3'>

            <footer className='py-3 my-1 '>

                <ul className='nav justify-content-center text-white border-bottom pb-3 mb-3 '>

                    <li className='nav-item'><Link to="/" className='nav-link px-2 text-white '>Home</Link></li>
                    <li className='nav-item'><Link to="/contact" className='nav-link px-2 text-white '>Contect US</Link></li>
                </ul>

                {sociallinkData && sociallinkData.map((sociallink, index) =>
                <ul key={index}>

                     <AnimatedSocialIcon brandName="facebook"  url={sociallink.facebook} hoverColor="#3b5998" animation="grow" defaultColor="black"  width="2em"  animationDuration={0.8} style={{padding: '3em'}} />

                     <AnimatedSocialIcon brandName="instagram"  url={sociallink.instagram} hoverColor="#8a3ab9" animation="grow" defaultColor="black"  width="2em"  animationDuration={0.8} style={{padding: '3em'}} />

                     <AnimatedSocialIcon brandName="twitter"  url={sociallink.twitter} hoverColor="#00acee" animation="grow" defaultColor="black"  width="2em"  animationDuration={0.8} style={{padding: '3em'}} />

                                                 
                </ul>
                )}
                <b className='text-white s-3'>&copy; 2023 Copyright: &nbsp;<Link className='text-white' to='/'>Cammra Web </Link></b>
            </footer>
        </div>
    );
}

export default Footer;