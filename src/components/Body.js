import { restaurantList } from "../contants"
import RestaruantCard from "./RestaruantCard"
import { useState, useEffect } from "react"

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
   );

    return filterData;
}


const Body = () => {

    const [ restaurants, setRestaurants] = useState(restaurantList)
 
   const [searchText, setSearchText] = useState("")
   
   useEffect(() => {
    getRestaurants();
    
   }, [])
   

   async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    
   } 
   
   
    console.log("render");
   
   
    return(
        <>
        <div className= "search-container">
            <input 
            type="text"
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={(e) => {setSearchText(e.target.value)}}
            />
            
            <button className="search-btn"
            onClick={() => {
                const data = filterData(searchText, restaurants)
                setRestaurants(data)
            }}
            >Search</button>
        </div>
        <div className="restaurant-list">
            {restaurants.map((restaurant)=> {
                return (
                <RestaruantCard {...restaurant.data} key={restaurant.data.id} />
                );
            })}
        </div>
        </>
    )
        
}
export default Body;