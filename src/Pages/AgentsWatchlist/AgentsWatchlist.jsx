import { realtorKey } from 'Utils/utils'
import axios from 'axios'
import React, { useEffect } from 'react'

const AgentsWatchlist = () => {
  useEffect(()=>{
    const options =  {
      method: 'GET',
      url: 'https://us-real-estate.p.rapidapi.com/for-sale',
      params: {offset: '0', limit: '42', state_code: 'LA', city: 'Los Angeles', sort: 'newest'},
      headers: {
        'X-RapidAPI-Key': realtorKey,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
      }
    };
    axios
    .request(options)
    .then((data) => {
      console.log("data",data.data.data.results);
    })
    .catch((e) => {
      console.log(e.message);
    });
  },[])
  return (
    <div>MyAgentsList</div>
  )
}

export default AgentsWatchlist