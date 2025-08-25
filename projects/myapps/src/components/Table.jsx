import React from 'react';

function Table() {
  const data = [
    {
      Name: "Tarak",
      Images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      Email: "luckychandrahas@gmail.com",
      city: "Tpg",
      course: [{ id1: "java", id2: "cpp" }],
    },
    {
      Name: "Loki",
      Images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      Email: "loki@gmail.com",
      city: "hyd",
      course: [{ id1: "java", id2: "python" }],
    },
    {
      Name: "Yash",
      Images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      Email: "yash@gmail.com",
      city: "hyd",
      course: [{ id1: "java", id2: "html" }],
    },
    {
      Name: "Fareed",
      Images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      Email: "fareed@gmail.com",
      city: "hyd",
      course: [{ id1: "java", id2: "cpp", id3: "js" }],
    },
    {
      Name: "Aditya",
      Images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      Email: "Aditya@gmail.com",
      city: "vijayawada",
      course: [{ id1: "java", id2: "cpp" }],
    },
    {
      Name: "Dinesh",
      Images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      Email: "Dinesh@gmail.com",
      city: "hyd",
      course: [{ id1: "java", id2: "cpp" }],
    },
  ];

  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Image</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.city}</td>
              <td>
                <img src={item.Images} alt={item.Name} width="80" />
              </td>
              <td>
                {Object.values(item.course[0]).join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
