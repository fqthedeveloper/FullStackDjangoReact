import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Service from './Service'

const baseUrl = 'http://127.0.0.1:8000/api';


function Home() {

    const [bannerData, setBannerData] = useState([]);

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

    return (

        <div className='App'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    {bannerData && bannerData.map((banner, index) =>
                        <div className="carousel-item active">

                            <img key={index} src={banner.img} className="img-fluid shadow-4" alt={banner.alt_text} />
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
            <div class="container mt-4 border-dark border-0">
                <Service />
            </div>

        </div>

    );
}

export default Home;