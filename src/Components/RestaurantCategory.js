import { useState } from "react";
import ItemList from "./itemList";



const RestaurantCategory = ({ data ,showItems, setShowIndex }) => {
   
    const handleClick=()=>{
       setShowIndex() ; 
    }; 

    
  return (
    <div>
      {/* header */}
      <div className="bg-gray-200  mx-auto my-4 p-4 w-6/12 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems &&  <ItemList items={data.itemCards} />}
      </div>
      {/* Accordian body */}
    </div>
  );
};
export default RestaurantCategory;
