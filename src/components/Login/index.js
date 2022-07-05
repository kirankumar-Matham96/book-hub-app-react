import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    showError: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const {history} = this.props
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data, {expires: 1})
      history.replace('/')
    } else {
      this.setState({errorMessage: data.error_msg, showError: true})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, errorMessage, showError} = this.state

    return (
      <div className="login-bg-container">
        <div className="login-responsive-container">
          <div className="login-image-container">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656924786/MiniProjects/BookHub/login_image.png"
              alt="website login"
              className="login-img"
            />
          </div>
          <div className="login-content-container">
            <form onSubmit={this.handleSubmit} className="form-container">
              <img
                src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656924684/MiniProjects/BookHub/website_logo.png"
                alt="login website logo"
                className="website-logo"
              />
              <label htmlFor="username" className="label">
                Username*
              </label>
              <input
                type="text"
                className="input-field"
                id="username"
                value={username}
                placeholder="username"
                autoComplete="off"
                onChange={this.onChangeUserName}
              />
              <label htmlFor="password" className="label">
                Password*
              </label>
              <input
                type="password"
                className="input-field"
                id="password"
                value={password}
                placeholder="password"
                onChange={this.onChangePassword}
              />
              {showError ? (
                <p className="error-message">{errorMessage}</p>
              ) : null}
              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
