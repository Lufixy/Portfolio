import axios from 'axios';
import config from '../../../../config';

export default async function handler(req, res) {
 
    const url = 'https://api.openweathermap.org/data/2.5/';
    const key = 'aee9368ab4b3e538bec75d39005eccf3';
    const cityName = 'istanbul';
    const {data} = await axios.get(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`) 
   
    try {

       return res.json({
            status: true,
            data: data
        })
    }
    catch (err) {
        
        return res.json({
            status: false,
            data: err.message
        })
    }


}