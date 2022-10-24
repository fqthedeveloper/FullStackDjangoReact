import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function Page(){
    const [ pageData, setPageData] = useState([]);
    let {page_id,page_slug} = useParams();

    useEffect(() => {

        try {
            axios.get(baseUrl + '/page/' + page_id + '/' +page_slug)
                .then((res) => {
                    setPageData(res.data);

                });

        } catch (error) {
            console.log(error);
        }
    }, [page_id]);

    return(
        <>
            <h1>{pageData.title}</h1>
            <p>{pageData.content}</p>
        </>
    )
}

export default Page;