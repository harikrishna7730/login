import { useEffect, useState } from "react"
import axios from 'axios';

const RecipePage=()=>{
    const[data,setData]=useState([])

    useEffect(()=>{
     FetchingApi()
    },[])

 const FetchingApi=async()=>{
   

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {
        from: '0',
        size: '20',
        tags: 'under_30_minutes'
      },
      headers: {
        'x-rapidapi-key': '6c589db793msh563546083ef0f49p171f5djsn8ada960bfdc0',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data)
    } catch (error) {
        console.error(error);
    }
    }
    return(
        <>
      {
        data.map((val)=>{
            return(
                <>
                <h1>{val.id}</h1>
                </>
            )
        })
      }
        
        </>
    )
}
export default RecipePage
