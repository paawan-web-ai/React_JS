import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate =useNavigate()
  return (
    <div className="flex items-center justify-between px-10 py-5 text-2xl bg-yellow-950 text-white">
      <h2
       onClick={()=>{
        navigate("/")
       }}
       className='cursor-pointer'
      >NAVBAR</h2>

      <div className="flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/course"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          COURSES
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
