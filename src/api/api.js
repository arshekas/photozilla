import axios from 'axios'


const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.unsplash.com/";

export const getImages = async (search) => {
    try {
        const result = await axios.get(`${BASE_URL}photos`, {
            headers: {
                "Authorization": "Client-ID " + API_KEY ,
            }
        })
        return result;
    }
    catch(error)
    {
        console.log(error)
    }
    
}