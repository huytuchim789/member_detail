import React, { Component } from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';
const Test = () => {
    const [data,setData]=useState(null);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/user/1')
      .then((response)=>{
            setData(response.data);
      })
    },[]);
    if(!data){
        return 'nothing';
    }
    return (
        <div>
            <div>{data.full_name}</div>
            <div>{data.email}</div>
        </div>
    );
}

export default Test;

