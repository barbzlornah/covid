import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);

       return {confirmed,recovered,deaths,lastUpdate };

    } catch (error) {
        
    }

}
// export const fetchDailyData = async () => {
//     try {
//         const { data } = await axios.get('${url}/daily');

//         const modifiedData = data.map((dailyData) =>({
//             confirmed: dailyData.confirmed.total,
//             deaths: dailyData.deaths.total,
//             date: dailyData.reportDate,

//         }));
        
//         return modifiedData;

//     }catch(error){

//     }
    
// }

// Instead of Global, it fetches the daily data for the US
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };