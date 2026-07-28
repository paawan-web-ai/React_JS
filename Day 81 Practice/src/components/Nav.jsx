import React, { useState } from 'react'

const Nav = ({ value, changeTheme }) => {


    const handleChange = (e) => {
        changeTheme(e.target.value)
    }

    return (
        <div className='nav'>
            <form>
                <label htmlFor="color">Choose a Color: {value}</label>
                <br /><br />
                <select
                    onChange={handleChange}
                    value={value}
                    id="color" name="color">
                    <option value="">-- Select Color --</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="gray">Gray</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                </select>

            </form>
        </div>
    )
}

export default Nav
