import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Planets } from "react-preloaders2";
import Review from "./Review.css";
// import {  useParams } from 'react-router-dom';

const baseUrl = "http://127.0.0.1:8000/api";

function CustamersReview() {
  const [custamerData, setCustamerData] = useState([]);
  const [loading, setLoading] = useState(true);
  // let [customer_id] =  useParams();

  useEffect(() => {
    document.title = "Reviews Page";

    try {
      axios.get(baseUrl + "/custamerlist/").then((res) => {
        setCustamerData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetch(baseUrl + "/custamerlist/")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={Review}>
      <Planets customLoading={loading} animation="slide" time={3000} />

      <section className="section-medium section-arrow--bottom-center section-arrow-primary-color bg-primary">
      <div className="container">
          <div className="row">
              <div className="col-md-12 text-white text-center">
                  <h2 className="section-title "> What Others Say About Us</h2>
                  <p className="section-sub-title">
                     
                  </p>
              </div>
          </div>
      </div>
</section>
<section className="section-primary t-bordered">
    <div className="container">
    <div className="row testimonial-three testimonial-three--col-three">
    {custamerData && custamerData.map((custamer, index) =>
        
            <div key={index} className="col-md-4 testimonial-three-col">
            
                <div className="testimonial-inner">
                    <div className="testimonial-image" itemProp="image">
                        <img  width="80" height="80" alt={custamer.alt_text} src={custamer.img} />
                    </div>
                    <div className="testimonial-content">
                        <p className="text-secondary">
                            {custamer.reviwe}
                        </p>
                    </div>
                    <div className="testimonial-meta">
                        <strong className="testimonial-name text-secondary" itemProp="name">{custamer.custamer_name}</strong>
                    </div>
                </div>
            
            </div>
        
          )}
        </div>
    </div>
</section>
    </div>
  );
}

export default CustamersReview;
