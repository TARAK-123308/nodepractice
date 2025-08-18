import React, { useState } from 'react';

function Body() {
  const [object, setObject] = useState([]);

  const products = [
    { id: 1, name: "Biriyani", price: 290, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam.", image: "https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg" },
    { id: 2, name: "Burger", price: 190, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam.", image: "https://foodish-api.com/images/burger/burger60.jpg" },
    { id: 3, name: "Friedrice", price: 300, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam.", image: "https://inquiringchef.com/wp-content/uploads/2016/02/Thai-Basil-Fried-Rice_square-0883.jpg" },
    { id: 4, name: "Naan", price: 300, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam.", image: "https://static.toiimg.com/photo/52291229.cms" },
    { id: 5, name: "Noodles", price: 100, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam.", image: "https://www.recipetineats.com/tachyon/2019/03/Mushroom-Ramen-Noodles_3.jpg" },
    { id: 6, name: "Paneer Biriyani", price: 450, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGHb7168qPHzObZRqTUixagxUXHg_NiZ06A&s" },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Body;
