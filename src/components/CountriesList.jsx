import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const CountriesList = ({ countries }) => {


    return (
        <div>
            <Outlet />
            <ul class="list-group">
                {countries.map((country) => {
                    return (
                        <li class="list-group-item">
                            <img
                                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                                alt={country.name}
                            />
                            <Link className="country" to={country.alpha3Code}>
                                {country.name.common}
                            </Link>
                        </li>

                    );
                })}
            </ul>
        </div >
    );
};

export default CountriesList;
