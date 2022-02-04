import {Component} from 'react'

import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="app-bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-bg-container">
            <div className="password-form-container">
              <h1 className="heading">Add New Password</h1>
              <form className="form">
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-logo"
                  />
                  <hr className="line" />
                  <input
                    type="text"
                    placeholder="Enter website"
                    className="input"
                  />
                </div>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="website"
                    className="website-logo"
                  />
                  <hr className="line" />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input"
                  />
                </div>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="website"
                    className="website-logo"
                  />
                  <hr className="line" />
                  <input
                    type="text"
                    placeholder="Enter Password"
                    className="input"
                  />
                </div>
                <div className="btn-container">
                  <button type="button" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password-manager"
              className="password-manager-img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
