import React from 'react';
// import Cards from './componets/Cards/Cards';
// import Charts from './componets/Charts/Charts';
// import CountryPicker from './componets/CountryPicker/CountryPicker';
import{Cards,Charts,CountryPicker} from './componets';
import styles from './App.module.css';
import {fetchData} from'./api';

class App extends React.Component {
    async componentDidMount(){
        const data = await fetchData();
        console.log(data);
    }
    render(){
        return(
            <div className = {styles.container}> 
                <Cards/>
                <CountryPicker/>
                <Charts/>
            </div>
        )
    }
}
export default App;