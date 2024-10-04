import { useState } from "react";
import "./Country.css";

const Country = ({country, handleVisitedCountry}) => {
    console.log(country);

    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    // console.log(handleVisitedCountry);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>  
            <img style={{height: "150px"}} src={flags?.png} alt="" />      
            <p>Total Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {visited && <p>This country has been visited!</p>}
            {/* {visited ? 'I have visited this country' : "I don't have visited"} */}
        </div>
    );
};

export default Country;