import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { Link } from 'react-router-dom';
import initialCountry from './countries.json';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [countries, setCountries] = useState(initialCountry);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
          <Route path="/countries" element={<CountriesList />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
