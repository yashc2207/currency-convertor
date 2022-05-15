import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

const Display = () => {

    document.title = "Currency convertor results"

    let {currencyname} = useParams()
    
    const [output,setOutput] = useState([])

    const [fetched,setFetched] = useState(false)


    useEffect(() => {const urltohit = `https://v6.exchangerate-api.com/v6/5f125f773a71ab0a8123a422/latest/${currencyname}`;
    fetch(urltohit).then((response) => {return response.json()}).then((data) => {setOutput(data); console.log(data); setFetched(true)}).catch((e)=>console.log(e))},[])

    if(!fetched) {return null}

    let outArray = Object.values(output)
    console.log(outArray)
    let a = outArray[8]
    let currencyNames = Object.keys(outArray[8])
    let conversionValues = Object.values(outArray[8])
    console.log(currencyNames)
    console.log(conversionValues)
    let loopdata = []
    for (let i in a) {loopdata.push(<li>{`One ${currencyname} will give you a total of ${a[i]} ${i}`}</li>)}
    loopdata.shift()

  return (
      <div>
    <h2 className='display-3 text-center'>The conversion values for {currencyname} are as follows</h2>
    <br></br>
    <p>You can check the meaning of the ISO 4217 codes used to represent currencies <a href="https://en.wikipedia.org/wiki/ISO_4217">here</a></p>
    <p>Last updated at {outArray[4].slice(0,outArray[4].length-6)} GMT</p>
    <ul>
    {loopdata}
    </ul>
    </div>
  )


}

export default Display