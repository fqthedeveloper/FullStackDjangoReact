// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';import {Planets} from 'react-preloaders2';


// const baseUrl = 'http://127.0.0.1:8000/api';

// function Proudect() {

//   const [bannerData, setBannerData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     document.title = 'Home Page';

//     try {
//         axios.get(baseUrl + '/banner/')
//             .then((res) => {
//                 setBannerData(res.data)

//             });

//     } catch (error) {
//         console.log(error);
//     }
// }, []);

// useEffect(() => {
//     fetch(baseUrl + '/banner/')
//       .then(response => response.json())
//       .then(json => {
//         setLoading(false);
//       })
//       .catch(err => {
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div className='App'>
//             <Planets customLoading={loading} animation="slide" time={3000} />
//     </div>
//   )
// }

// export default Proudect