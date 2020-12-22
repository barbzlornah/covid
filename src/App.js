import React from 'react';
// import Cards from './componets/Cards/Cards';
// import Charts from './componets/Charts/Charts';
// import CountryPicker from './componets/CountryPicker/CountryPicker';
import{Cards,Charts,CountryPicker} from './componets';
import styles from './App.module.css';
import {fetchData} from'./api';

class App extends React.Component {
    state = {
        data : {},
    }
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
        
    }
    render(){
        const { data } = this.state;
        return(
            <div className = {styles.container}> 
                <Cards data = {data}/>
                <CountryPicker/>
                <Charts/>
            </div>
        )
    }
}
export default App;