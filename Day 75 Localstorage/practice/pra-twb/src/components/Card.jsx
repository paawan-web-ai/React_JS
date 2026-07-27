import React from 'react'

const Card = (props) => {
    return (
        <div >
            <div className="w-44 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition">

                <img
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-600"
                    src={props.img}
                    alt={props.user}
                />

                <h1 className="mt-3 text-xl font-bold text-gray-900">
                    {props.name}
                </h1>

                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {props.role}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                    {props.dispcription}
                </p>

                <button
                 onClick={props.delete}
                 className='text-xl font-semibold rounded bg-red-500 mt-3 py-1 px-2'>Remove</button>
            </div>

        </div>
    )
}

export default Card
