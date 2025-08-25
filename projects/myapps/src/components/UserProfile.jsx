import React from 'react'

const UserProfile = ({user}) => {
  return (
    	<div>
		<h2><b>Name:</b> {user.name}</h2>
		<p><b>Email:</b> {user.email}</p>
		<p><b>City:</b> {user.city}</p>
	</div>
  )
}

export default UserProfile
