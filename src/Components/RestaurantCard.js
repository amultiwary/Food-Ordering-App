import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    

     const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime,}=resData.info;
      return (
          <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="res-logo rounded-lg" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name} </h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{costForTwo}</h4>
           
          </div>
    );
};


//Higher order component 
//input- restaurantCard ==> RestaurantCard

export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;