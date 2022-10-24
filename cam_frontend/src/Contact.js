import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Planets } from 'react-preloaders2';


const baseUrl = 'http://127.0.0.1:8000/api/contact/';


function Contact() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    document.title = 'Contact US';
  })
  const listStyle = {
    'listStyle': 'none'
  }
  const [contactData, setContactData] = useState({

    'full_name': '',
    'email': '',
    'phone_number': '',
    'massege': '',
    'status': '',
  });

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value
    });
  }

  const submitForm = () => {
    const contactFormData = new FormData();
    contactFormData.append("full_name", contactData.full_name)
    contactFormData.append("email", contactData.email)
    contactFormData.append("phone_number", contactData.phone_number)
    contactFormData.append("massege", contactData.massege)

    try {
      axios.post(baseUrl, contactFormData).then((response) => {
        setContactData({
          'full_name': '',
          'email': '',
          'phone_number': '',
          'massege': '',
          'status': 'success',
        });
      });
    } catch (error) {
      console.log(error);
      setContactData({ 'status': 'error' })
    }
  };

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(json => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='app'>
      <Planets customLoading={loading} animation="slide" time={3000} />
      <div className="container mt-4">


        <div className="row">
          <div className="col-7">
            {contactData.status === 'success' && <h2 className='text-success' time={1000}>Thanks For Your Contact US</h2>}
            {contactData.status === 'error' && <h2 className='text-danger' time={1000}>Something Wrong Happend</h2>}
            <div className="card">
              <h5 className="card-header">Contact US </h5>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label float-start">Full Name</label>
                    <input type="text" value={contactData.full_name} onChange={handleChange} className="form-control" id="exampleInputText" name="full_name" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label float-start">Email</label>
                    <input type="email" value={contactData.email} onChange={handleChange} className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label float-start"> Phone Number </label>
                    <input type="text" value={contactData.phone_number} onChange={handleChange} className="form-control" name="phone_number" id="exampleInputText" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label float-start">Massege</label>
                    <textarea rows="5" name="massege" className="form-control" placeholder="Enter Masseg Here " value={contactData.massege} onChange={handleChange}></textarea>
                  </div>

                  <button onClick={submitForm} type="submit" className="btn btn-primary text-start">Send</button>
                </form>
              </div>
            </div>
          </div>

          <div className='col-4 offset-1'>
            <h3 className='boder-bottom'> Address </h3>
            <ul className='m-0 p-0' style={listStyle}>
              <li>
                <label className='fw-bold'>Address:</label>
                <span className='ms-2'>Waadala Najka </span>
              </li>
              <li>
                <label className='fw-bold'>Mobile Nuber:</label>
                <span className='ms-2'>7776062165</span>
              </li>
              <li>
                <label className='fw-bold'>Phone:</label>
                <span className='ms-2'> 0253 26534272</span>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;