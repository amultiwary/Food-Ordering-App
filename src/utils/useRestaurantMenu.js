import { useEffect, useState } from "react";
import { MENU_API, MENU_API_LAST } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId + MENU_API_LAST);
    const json = await data.json();
    setresInfo(json.data);
  };

 
  return resInfo;
};
export default useRestaurantMenu;
