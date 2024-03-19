import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Agro Diary</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="activity-form">Add Activity</NavLink>
      </nav>
    </header>
  )
}

export default Header;
