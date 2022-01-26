import axios from "axios";
 export const baseUrl = "https://bayut.p.rapidapi.com"




  export const fetchApi = async(url) =>{
      const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'f26106dd85mshac36a59c98a7a3fp1994b1jsn0e47e4ca0df5'
          }
      });
      return data;
  }