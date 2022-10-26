import React, { useEffect, useState } from 'react'
import Countries from './Countries';


const url="https://restcountries.com/v3.1/all";

const CountryApp = () => {

    const [isloading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    const [countries,setCountrires]=useState([]);

    const fetchData=async(url)=>{

        setIsLoading(true);
        try{

            const response=await fetch(url);
            const data=await response.json();
            setCountrires(data);
            setError(null);
            console.log(countries);
            
        }catch(error){

            setIsLoading(false);
            setError(error);
        }

    }

    useEffect(()=>{

        fetchData(url)
    } ,[])
  return <>
  
    <h>CountryApp</h>
    {isloading && <h2>Loading...</h2>}
    {error && <h2>{error.message}</h2>}
    {countries && <Countries countries={countries}/>}
    </>
  
}

export default CountryApp