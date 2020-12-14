import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {data: {confirmed,recovered,deaths,lastupdate}} = await axios.get(url);

        const modifiedData = {confirmed,recovered,deaths,lastupdate }

        return modifiedData;
    } catch (error) {
        
    }

}