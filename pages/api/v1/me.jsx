import axios from 'axios';
import config from '../../../config';

export default async function handler(req, res) {
 

    const {data} = await axios.get(`https://linkcord.js.org/api/v3/user/${config.discord.id}`) // if get error join discord server https://discord.gg/jkUX85mfBs
   
    try {

       return res.json({
            status: true,
            data: data.data
        })
    }
    catch (err) {
        
        return res.json({
            status: false,
            data: err.message
        })
    }


}