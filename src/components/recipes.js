// import { useContext, useEffect, useState } from "react"
// import axios from 'axios';
// import { Datashare } from "../App";

// const Recipes=()=>{
//     const {data}= useContext(Datashare)
// const [search ,setSearch] =useState("");
// const [details,setDetails] = useState({})
    
// const handleSearch=(e)=>{
//     setSearch(e.target.value)
//     console.log(e.target.value)
// }

// const HandleInput=async(id)=>{
//     const url = `https://all-in-one-recipe-api.p.rapidapi.com/details/${id}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '6c589db793msh563546083ef0f49p171f5djsn8ada960bfdc0',
//             'x-rapidapi-host': 'all-in-one-recipe-api.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//         setDetails(result)
//         console.log(result.recipe);

//     } catch (error) {
//         console.error(error);
//     }
// }
 
//     return(
//         <>
//         {
//             data.map((val,index)=>{
//                 return(
//                     <>
//                         <div key={index}>
//                             <h1 onClick={()=>HandleInput(val.id)}>{val.name}</h1>
//                             <img src={val.image} height={100} width={200} alt="images"/>
//                         </div>
//                     </>
//                 )
//             })
//         }
//         </>
//     )
// }
// export default Recipes;




import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Datashare } from "../App";

const Meals = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery === "") return;
    Fetching(searchQuery);
  }, [searchQuery]);

  const Fetching = async (query) => {
   
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const result = response.data;
      console.log(result);
      setData(result.meals || []);
    } catch (err) {
      console.log(err);
      setData([]);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    {/* <div className=" flex flex-col  h-[100px]"> 
        <img src={images} alt="logo" height={50} width={100} className=" ml-8 absolute mix-blend-multiply"/>
        <h1>The Meals...</h1>
      <input
        type="search"
        placeholder="Search for meals..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border-2 border-black rounded px-6 py-2 inline-block mt-8  md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto"
      />
      </div> */}

      {data.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((val) => (
            <div
              key={val.idMeal}
              className="border-2 rounded-lg overflow-hidden shadow-lg flex flex-col items-center w-[300px] bg-white"
            >
              <img
                src={val.strMealThumb}
                alt={val.strMeal}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-2xl font-semibold mb-2">{val.strMeal}</p>
                <p className="text-lg text-gray-600">Category: {val.strCategory}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // <LoadingSpinner />
        <h1 className="flex justify-center align-middle mt-[200px]">Loading....</h1>
      )}
    </>
  );
};

export default Meals;

