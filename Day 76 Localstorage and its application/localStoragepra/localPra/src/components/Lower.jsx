import React from 'react'

const Lower = ({ username, email, description }) => {
    return (
        <div>
            <p>{username}</p>
            <p>{email}</p>
            <p>{description}</p>
        </div>
    )
}

export default Lower
