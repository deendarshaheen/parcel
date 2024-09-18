import { restaurantList } from "../contants"
import RestaruantCard from "./RestaruantCard"

const Body = () => {
    return(
        <div className="restaurant-list">
            {restaurantList.map((restaurant)=> {
                return <RestaruantCard {...restaurant.data} key={restaurant.data.id} />
            })}
        </div>
    )
        
}
export default Body;