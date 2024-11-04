import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // if  no dependency array => useEffect is called on every render
  // if dependency array is empty =[] => useEffect is called on initial render (just once)
  // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
  useEffect(() => {});

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="logo w-35 h-[100px]" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/About">About </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/Cart">Cart</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
