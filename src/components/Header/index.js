import {useState} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const [showMenu, setShowMenu] = useState(false)

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const onClickMenu = () => {
    setShowMenu(true)
  }

  const onMenuClose = () => {
    setShowMenu(false)
  }

  return (
    <>
      <div className="mobile-view">
        <nav className="nav-container">
          <Link to="/" className="menu-item-link">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656924684/MiniProjects/BookHub/website_logo.png"
              alt="website logo"
              className="header-website-logo"
            />
          </Link>
          <button
            type="button"
            className="nav-menu-button"
            onClick={onClickMenu}
          >
            <GiHamburgerMenu className="menu-icon" />
          </button>
        </nav>
        {showMenu ? (
          <ul className="menu-items-container">
            <Link to="/" className="menu-item-link">
              <li className="menu-item">Home</li>
            </Link>
            <Link to="/" className="menu-item-link">
              <li className="menu-item">Bookshelves</li>
            </Link>

            <li className="menu-item">
              <button
                type="button"
                onClick={onLogout}
                className="logout-button"
              >
                Logout
              </button>
            </li>
            <li className="menu-item">
              <button
                type="button"
                onClick={onMenuClose}
                className="menu-close-button"
              >
                <AiFillCloseCircle className="menu-close-icon" />
              </button>
            </li>
          </ul>
        ) : null}
      </div>
      <div className="desktop-view">
        <nav className="nav-container">
          <Link to="/" className="menu-item-link">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656924684/MiniProjects/BookHub/website_logo.png"
              alt="website logo"
              className="header-website-logo"
            />
          </Link>
          <ul className="menu-items-container">
            <Link to="/" className="menu-item-link">
              <li className="menu-item">Home</li>
            </Link>
            <Link to="/" className="menu-item-link">
              <li className="menu-item">Bookshelves</li>
            </Link>

            <li className="menu-item">
              <button
                type="button"
                onClick={onLogout}
                className="logout-button"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default withRouter(Header)
