import React from 'react'

export default function NavbarMobile(props) {
  return (
    <div className={`navbar-collapse ${props.handleOpenMenu && 'active'} `}>
        <div className="search-mobile">
          <div className="container">
            <div className="input-group">
              <i className="bi bi-search icon-search icon" />
              <input
                type="text"
                className="form-control rounded-start input-search"
                placeholder="What do you need"
              />
            </div>
          </div>
          <div className=" nav-mobile">
            <ul className="nav nav-tabs nav-mobile-sub">
              <li className="nav-item nav-item-mobile dropdown">
                <a
                  className="nav-link dropdown-toggle nav-link-mobile"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  NewYork
                </a>
                <ul className="dropdown-menu dropdown-menu-location dropdown-menu-location-mb">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-mobile dropdown">
                <a className="nav-link dropdown-toggle nav-link-mobile" href="#">
                  Cuisine
                </a>
                <ul className="dropdown-menu dropdown-menu-categories dropdown-menu-categories-mb">
                  <div className="row container mg-auto">
                    <li className="item-cate col-sm-custom">
                      <div className="item-cate-img">
                        <a href="#" className="d-block">
                          <div className="image-categories">
                            <img
                              className="img-cate"
                              src="../Assets/Images/burger.svg"
                              alt=""
                              width={60}
                              srcSet=""
                            />
                          </div>
                          <h6 className="title-cate">Buger and Fires</h6>
                        </a>
                      </div>
                    </li>
                    <li className="item-cate col-sm-custom">
                      <div className="item-cate-img ">
                        <a href="#" className="d-block">
                          <div className="image-categories">
                            <img
                              className="img-cate"
                              src="../Assets/Images/burger.svg"
                              alt=""
                              width={60}
                              srcSet=""
                            />
                          </div>
                          <h6 className="title-cate">Buger and Fires</h6>
                        </a>
                      </div>
                    </li>
                    <li className="item-cate col-sm-custom">
                      <div className="item-cate-img ">
                        <a href="#" className="d-block">
                          <div className="image-categories">
                            <img
                              className="img-cate"
                              src="../Assets/Images/burger.svg"
                              alt=""
                              width={60}
                              srcSet=""
                            />
                          </div>
                          <h6 className="title-cate">Buger and Fires</h6>
                        </a>
                      </div>
                    </li>
                    <li className="item-cate col-sm-custom">
                      <div className="item-cate-img ">
                        <a href="#" className="d-block">
                          <div className="image-categories">
                            <img
                              className="img-cate"
                              src="../Assets/Images/burger.svg"
                              alt=""
                              width={60}
                              srcSet=""
                            />
                          </div>
                          <h6 className="title-cate">Buger and Fires</h6>
                        </a>
                      </div>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="nav-item nav-item-mobile">
                <a className="nav-link nav-link-mobile" href="#">
                  Back to main demo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
