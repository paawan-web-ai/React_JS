import React from 'react'
import Upper from './Upper'
import Lower from './Lower'

const Card = ({ username, imgurl, email, description }) => {
    return (
        <div>
            <Upper
                imgurl={imgurl}
            />
            <Lower
                username={username}
                email={email}
                description={description}
            />
        </div>
    )
}

export default Card
