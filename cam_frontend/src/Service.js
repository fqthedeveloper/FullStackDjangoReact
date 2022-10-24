import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

const baseUrl = 'http://127.0.0.1:8000/api';


function Service() {

    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {

        document.title = 'Service Page';

        try {
            axios.get(baseUrl + '/service/')
                .then((res) => {
                    setServiceData(res.data)

                });

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
            <div className='App'>
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center"> Service </h2>
                        <p className="text-center"> </p>
                    </div>
                    <div className='row row-cols-3 row-cols-md-3 g-4'>

                        {serviceData && serviceData.map((service, index) =>
                            <div className="card">
                                <img key={index} src={service.img} className="card-img-top" alt={service.alt_text} />
                                <div className="card-body">
                                    <h5 key={index} className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.detail}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    );
}

export default Service;