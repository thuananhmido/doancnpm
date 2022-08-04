import React from 'react'

export default function Modal(props) {
   
  return (
    <div className={`modal ${props.handleOpen && 'show' }`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item item-menu">
                <a href="" className="navlink">
                  Signin
                </a>
              </li>
              <li className="nav-item item-menu">
                <a href="" className="navlink">
                  SignUp
                </a>
              </li>
            </ul>
            <button 
                type="button" 
                className="btn-close item-menu"
                onClick={props.handleClose}
                >
              <span>
                <i className="bi bi-x" />
              </span>
            </button>
          </div>
          <div className="modal-body">
            <form action="" className="signin-form">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="text" className="form-control" />
                <div className="invalid-message">
                  Please provide a valid email address
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <div className="password-toggle">
                  <input type="password" className="form-control" />
                  <label htmlFor="" className="password-toggle-btn">
                    <input type="checkbox" className="password-toggle-check" />
                    <span className="password-toggle-indicatior" />
                  </label>
                </div>
              </div>
              <div className="mb-3 remember-password">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label htmlFor="" className="form-check-label">
                    Remember me
                  </label>
                </div>
                <a href="">Forgot password</a>
              </div>
              <button className="btn btn-danger w-100" type="submit">
                Signin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
