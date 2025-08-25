import React from 'react'

const UserProfile1 = (props) => {
     
  return (
    <div className='Hai'>
       {props.name}---{props.age}---{props.email}
    </div>
  )
}

export default UserProfile1
