import React from 'react'
import UserProfile from './UserProfile'

const Users = ({users}) => {
  return (
   <div>
		{users.map((obj, index)=>(<UserProfile user = {obj} key={index} />))}
	</div>

  )
}
export default Users
