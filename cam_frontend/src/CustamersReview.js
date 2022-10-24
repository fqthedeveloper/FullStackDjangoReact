import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'; import { Planets } from 'react-preloaders2';
import { useParams } from 'react-router-dom';


const baseUrl = 'http://127.0.0.1:8000/api';

function CustamersReview() {

  const [custamerData, setCustamerData] = useState([]);
  const [loading, setLoading] = useState(true);
  let { custamer_id } = useParams();

  useEffect(() => {

    document.title = 'Review Page';

    try {
      axios.get(baseUrl + '/custamerlist/' + custamer_id)
        .then((res) => {
          setCustamerData(res.data)

        });

    } catch (error) {
      console.log(error);
    }
  }, []);

 

  useEffect(() => {
    fetch(baseUrl + '/custamerlist/')
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
      <div className="container">


        <div className="intro">
          <h2 className="text-center mt-4"> Review</h2>
          <p className="text-center"> </p>
        </div>
        <section className="gradient-custom">
          <div className="container my-5 py-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12">
                <div className="text-center mb-4 pb-2">
                  <i className="fas fa-quote-left fa-3x text-white"></i>
                </div>

                <div className="card">
                  <div className="card-body px-4 py-5">

                    <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                      <div className="carousel-indicators mb-0">
                        <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="0" className="active"
                          aria-current="true" aria-label="Slide 1"></button>
                      </div>
                      <div className="carousel-indicators mb-0">
                      </div>

                      <div className="carousel-inner pb-5">
                        <div className="carousel-item active">
                          <div className="row d-flex justify-content-center">
                            <div className="col-lg-10 col-xl-8">
                              <div className="row">
                              
                              {custamerData && custamerData.map((custamerlist, index) =>

                              <div className="col-lg-4 d-flex justify-content-center">
                                    <img src={custamerlist.img} className="rounded-circle shadow-1 mb-4 mb-lg-0" alt={custamerlist.alt_text} width="150" height="150" />
                                <div key={index} className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                    <h4 className="mb-4">{custamerlist.custamer_name}</h4>
                                    <p className="mb-0 pb-3">
                                      {custamerlist.reviwe}
                                    </p>
                                  </div>
                              </div>

                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4 pt-2">
                  <i className="fas fa-quote-right fa-3x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CustamersReview