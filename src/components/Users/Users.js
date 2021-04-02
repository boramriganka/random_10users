import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
import Loading from "../Loader/Loading";

export default function Users() {
  const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

  

  useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (response) {
      setUserData(response.data);
    }
    setLoading(true);
  };

  return (
    <div className="users-box">
      {loading? (
        <Loading />
      ) : (
        userData.map((user) => {
          return <SingleUser key={user.id} data={user} />;
        })
      )}
    </div>
  );
}
