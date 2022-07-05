import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from 'react-icons/ai'
import './index.css'

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content-container">
      <div className="footer-icons-container">
        <AiOutlineGoogle className="footer-icon" />
        <AiOutlineTwitter className="footer-icon" />
        <AiOutlineInstagram className="footer-icon" />
        <AiFillYoutube className="footer-icon" />
      </div>
      <p className="footer-description">Contact Us</p>
    </div>
  </footer>
)

export default Footer
