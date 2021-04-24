import React from 'react';

const Country = (props) => {
    const{name,population,region,flag}=props.country; 
    const flagStyle={height:'50px'}
    const countryStyle={border:'1px solid red', margin:'5px'};
    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={countryStyle  }>
            <h4>This is {name} </h4>
            <img style ={flagStyle}src={flag}></img>
            <p>Region:{region}</p>
            <p>population: {population}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;