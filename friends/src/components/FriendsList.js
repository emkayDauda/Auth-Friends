import React, { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function FriendsList(props) {
    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }, [])
  return <div>
      {
          
      }
  </div>;
}
