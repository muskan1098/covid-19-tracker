import React from 'react';
// to use components
import { Cards, Charts, CountryPicker} from './components';
import { fetchData } from './api';
import styles from './App.module.css';

class App extends React.Component {

    // creating states
    state = {
        data: {},
        country: ""
    }

    handleChange = async (country) => {
        const data = await fetchData(country);
        this.setState({ data: data, country:country });
    }


    async componentDidMount(){
        const data = await fetchData();
        this.setState({ data: data});
        
    };
     
    render() {
        return(
            <div className={styles.container}>
                <h1>covid-19</h1>
                <Cards data= { this.state.data} />
                <CountryPicker handleChange={this.handleChange} />
                <Charts data={this.state.data} country={this.state.country}/>
                
            </div>
        )
    }
}

export default App;