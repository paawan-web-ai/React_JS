// import React from 'react'

// const Navbar = (props) => {
//     return (
//         <div className='h-10 w-full bg-emerald-600 flex gap-5'>
//             <h1>{props.brand}</h1>
//             {props.children}
//         </div>
//     )
// }

// export default Navbar

//------------------------------------------------------

import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Navbar = () => {

    const data = useContext(userDataContext)

    return (
        <div className='h-10 w-full bg-emerald-600 flex gap-5'>
            <h1>{data[1].name}</h1>

        </div>
    )
}

export default Navbar
