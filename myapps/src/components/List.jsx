import React from 'react'
const List = ({movienames,titles}) => {
  return (
    <div>
      <h3>{titles}</h3>
      <ul>
        {movienames.filter((name,index)=>(name.length > 4)).map((name,index)=>
            <li key={index}>{name}</li>
        )}
      </ul>
    </div>
  )
}

export default List
