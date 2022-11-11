import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Service from './Service'
import Gallery from './Gallery'
import Review from './CustamersReview'
import {Planets} from 'react-preloaders2';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from './logo512.png'



const baseUrl = 'http://127.0.0.1:8000/api';


function Home() {

    const [bannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        document.title = 'Home Page';

        try {
            axios.get(baseUrl + '/banner/')
                .then((res) => {
                    setBannerData(res.data)

                });

        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetch(baseUrl + '/banner/')
          .then(response => response.json())
          .then(json => {
            setLoading(false);
          })
          .catch(err => {
            setLoading(false);
          });
      }, []);

    return (
        
        <div className='App'>
            <Planets customLoading={loading} animation="slide" time={3000} />
            <FloatingWhatsApp phoneNumber={7776062165} accountName={'Faizan Qureshi'} avatar={avatar} notificationSound={true} chatboxClassName='floating-whatsapp-chatbox' allowClickAway={true} placeholder={'Type a message..'} statusMessage={'Contact You'} chatMessage={'Hello there! 🤝 \nHow can we help You?'} />
            <div className='flow'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    {bannerData && bannerData.map((banner, index) =>
                        <div key={index} className="carousel-item active">

                            <img src={banner.img} className="img-fluid shadow-4" alt={banner.alt_text} />
                        </div>
                    )}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
            <div className="mt-5 md-5 ">
                <Service />
            </div>
            
            <div className="mt-5 md-5 ">
                <Gallery />
            </div>

            <div className='md-5 mt-5'>
                < Review />
            </div>                   
            </div>
        </div>

    );
}

export default Home;