import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';


const CountryDetails = ({countriesList}) => {
    const params = useParams();
    const oneCountry = countriesList.find(
		(country) => country.id === params.name.common
	);
	console.log("one Country", oneCountry);
  return (
  <div>
    <pre>{JSON.stringify(params, null, 2)}</pre>
            
			<h1>{oneCountry.name}</h1>
            <p>{oneCountry.capital}</p>
            <p>{oneCountry.area}</p>
            <p>{oneCountry.borders}</p>

			
  </div>
  )
};

export default CountryDetails;
