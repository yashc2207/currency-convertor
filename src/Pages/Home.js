import React from 'react'
import Select from 'react-select'
import { currencies } from 'currencies.json';
import { useState } from 'react'
import Buttongo from './Buttongo';
import { useNavigate } from "react-router-dom";



const Home = () => {

    const navigate = useNavigate();

    const [value, setValue] = React.useState();

    const handleChange = (e) => {
        setValue(e)
    }

    document.title = "Currency convertor"
    


  return (
      <div>
    <h1 className='display-2 text-center'>Currency conversion rates<br></br>
    <small className="display-6 text-muted">Updated every day</small>
    </h1>
    <br></br>
    <br></br>

    <Select
        name="currencies"
        className="dropdown"
        options={currencies}
        value={value}
        onChange={handleChange}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.code}
      />

    <p></p>
    <br></br>
    <div className='text-center'>
    {value ? <Buttongo funclick={() => navigate(`/display/${value.code}`)} btnclass = "btn btn-outline-success" text="Check rates" /> : ""}
    </div>
    <br></br>
    <p className='text-center'>Many thanks to the good folks over at <a href="https://app.exchangerate-api.com/">exhangerate API</a></p>
    </div>
  )
}

export default Home