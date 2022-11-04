import {Link} from 'react-router-dom'

import logo from '../cock-logo.svg'

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-center">
        <div className="nav-logo">
          <img src={logo} alt="cocktail" />
        </div>

        <div className="nav-menu">
          <button className='txt-btn'><Link to="/">Home</Link></button>
          <button className='txt-btn' ><Link to="/about">About</Link></button>
        </div>
      </div>
        

    </nav>
  )
}

export default NavBar
