import axios from 'axios';
import config from '../../../../config';

export default async function handler(req, res) {
    var token = config.github.token1+config.github.token2

    const {data} = await axios.get(`https://api.github.com/users/kalashiexe/repos`,{
        headers: {
            Authorization: `token ${token}`,
        }
    }) 
   
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