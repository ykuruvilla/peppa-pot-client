import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const NavBar: React.FC = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);
  return (
    <nav className="flex justify-between">
      <h1>Mamalan</h1>
      <ul className="flex space-x-1">
        {userContext.user?.isAdmin && <li>Admin</li>}
        <li>Profile</li>
        <li>Account</li>
        <li>Orders</li>
      </ul>
    </nav>
  );
};

export default NavBar;
