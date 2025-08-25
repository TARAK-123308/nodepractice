import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { themeContext } from "../App";

function Products() {
  const { name } = useParams();
 const {users, loading}  =  useContext(themeContext)

  if(loading){
    return (<>
      <p>Loading....</p>
    </>)
  }
  return (
    <div className="min-h-60">
      <h1>Products {name}</h1>
      {users && <ul>{users.map((user, index)=>(<li key={index}>{user.title}</li>))}</ul>}
    </div>
  );
}

export default Products;
