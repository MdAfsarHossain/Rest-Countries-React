import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) => {
        // console.log("visitedCountry: ", country.name.common)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Countries: {countries.length}</h1>

            <div className="">
                <h5>Visited Countries: {visitedCountries.length}</h5>

                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;