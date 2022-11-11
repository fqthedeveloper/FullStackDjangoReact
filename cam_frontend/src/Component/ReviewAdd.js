import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/custameradd/';



function ReviewAdd() {
    useEffect(() => {

        document.title = 'Reviews Add';
    })

    const [custamerData, setCustamertData] = useState({

        'custamer_name': '',
        'img': '',
        'reviwe': '',
        'status': '',
    });

    const handleChange = (event) => {
        setCustamertData({
            ...custamerData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = () => {
        const custamerData = new FormData();
        custamerData.append("custamer_name", custamerData.custamer_name)
        custamerData.append("img", custamerData.img)
        custamerData.append("reviwe", custamerData.reviwe)

        try {
            axios.post(baseUrl, custamerData).then((response) => {
                setCustamertData({
                    'custamer_name': '',
                    'img': '',
                    'reviwe': '',
                    'status': 'success',
                });
            });
        } catch (error) {
            console.log(error);
            setCustamertData({ 'status': 'error' })
        }
    };
    return (
            <div className="container">
                <div className="mt-4 md-6">
                    <div className="col-10 container">
                        {custamerData.status === 'success' && <p className='text-success'>Thanks For Adding Reviews </p>}
                        {custamerData.status === 'error' && <p className='text-danger'>Something Wrong Happend</p>}
                        <div className="card">
                            <h5 className="card-header">Reviews </h5>
                            <div className="card-body">
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label float-start">Full Name</label>
                                        <input type="text" value={custamerData.custamer_name} onChange={handleChange} className="form-control" id="exampleInputText" name="custamer_name" aria-describedby="emailHelp" />
                                    </div>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" htmlFor="inputGroupFile01">Upload Image</label>
                                        <input type="file" value={custamerData.img} onChange={handleChange} className="form-control" id="inputGroupFile01" name="img" />
                                    </div>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label float-start">Reviwe</label>
                                        <textarea rows="10" name="reviwe" className="form-control" placeholder="Enter Masseg Here " value={custamerData.reviwe} onChange={handleChange}></textarea>
                                    </div>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <button onClick={submitForm} type="submit" className="btn btn-primary text-start">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ReviewAdd