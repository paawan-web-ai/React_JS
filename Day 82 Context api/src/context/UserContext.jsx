import React, { createContext } from 'react'

//it provides data
export const userDataContext = createContext()

const UserContext = (props) => {

    const user = [
        {
            id: 1,
            name: "Paawan",
            age: 24,
            city: "Delhi",
            email: "paawan@example.com",
            isActive: true
        },
        {
            id: 2,
            name: "Rahul",
            age: 22,
            city: "Mumbai",
            email: "rahul@example.com",
            isActive: false
        },
        {
            id: 3,
            name: "Priya",
            age: 26,
            city: "Bengaluru",
            email: "priya@example.com",
            isActive: true
        },
        {
            id: 4,
            name: "Amit",
            age: 28,
            city: "Pune",
            email: "amit@example.com",
            isActive: true
        },
        {
            id: 5,
            name: "Sneha",
            age: 21,
            city: "Jaipur",
            email: "sneha@example.com",
            isActive: false
        }
    ];

    return (
        <div className='context-div'>
            <userDataContext.Provider value={user}>
                {props.children}
            </userDataContext.Provider>
        </div>
    )
}

export default UserContext
