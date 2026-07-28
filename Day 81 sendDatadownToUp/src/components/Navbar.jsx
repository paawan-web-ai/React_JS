import React, { useState } from 'react'
import "../index.css"
const Navbar = (props) => {

    const [value, setvalue] = useState('')


    return (
        <div className='nav'>
            <h1>Theme is {props.theme}</h1>
            {/* <button onClick={() => {
                props.settheme("Dark")
            }}>ChangeTheme</button> */}


            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(value)

                props.changeTheme(value)

                setvalue("")
            }}>
                <input
                    onChange={(e) => {
                        setvalue(e.target.value)
                    }}
                    value={value}
                    type="text"
                    placeholder='Enter theme' />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Navbar
