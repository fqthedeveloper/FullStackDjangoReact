import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';


const baseUrl = 'http://127.0.0.1:8000/api';

function Gallery() {

    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {

        document.title = 'Gallery Page';

        try {
            axios.get(baseUrl + '/gallery/')
                .then((res) => {
                    setGalleryData(res.data)

                });

        } catch (error) {
            console.log(error);
        }
    }, []);

  return (

                <div className="photo-gallery">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center md-1 text-white"> Gallery </h2>
                            <p className="text-center"> </p>
                        </div>
                        <div className="row photos">
                            
                        {galleryData && galleryData.map((gallery, index) =>
                            <div key={index} className="col-sm-6 col-md-4 col-lg-3 item"><a href={gallery.img} data-lightbox="photos" ><img src={gallery.img}  className="img-fluid" alt={gallery.detail} width='500px' height='500px' /></a></div>
                        )}
                        </div>
                        
                    </div>
                </div>
                
  )
}

export default Gallery;