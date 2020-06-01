import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl, StylesProvider} from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleChange }) => {

    const [countries, setCountries] = useState([]);

useEffect(() => {
    fetchAPI();
}, []);

const fetchAPI = async () => {
    setCountries(await fetchCountries());
}


    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleChange(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}

            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;