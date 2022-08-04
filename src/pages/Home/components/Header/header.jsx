import React from 'react'
import {useState, useEffect} from 'react'
import Modal from '../Modal/modal';
import NavbarMobile from '../NavbarMobile/navbarmobile';
export default function Header(props) {

  const [open,setOpen] = useState(false);
  const [search,setSearch] = useState(false)
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (() => {
    setOpenMenu(true)
  })
  const handleCloseMenu = (() => {
    setOpenMenu(false)
  })

  const handleOpenSearch = () =>{
    setSearch(true)
  }
  const handleCloseSearch = () =>{
    setSearch(false)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <header>
      <div className="navbar">
        <div className="navbar-brand">  
            <img
              src="../Assets/Images/logo.png"
              width={142}
              height={34}
              alt=""
              srcSet=""
            />
        </div>
        <div className="collapse">
          <ul className="nav nav-tabs">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                NewYork
              </a>
              <ul className="dropdown-menu dropdown-menu-location">
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
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Cuisine
              </a>
              <ul className="dropdown-menu dropdown-menu-categories">
                <div className="row container mg-auto">
                  <li className="item-cate col-md-4">
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
                  <li className="item-cate col-md-4">
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
                  <li className="item-cate col-md-4">
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
                  <li className="item-cate col-md-4">
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
            <li className="nav-item">
              <a className="nav-link " href="#">
                Back to main demo
              </a>
            </li>
          </ul>
        </div>
        <ul className="nav nav-tool">
          {search ? (
              <li className="nav-item search-item"
              onClick={handleCloseSearch}
              >
                <a className="nav-link " href="#">
                  <i className="bi bi-search icon" />
                </a>
              </li>
          ) :(
            <li className="nav-item search-item"
              onClick={handleOpenSearch}
              >
              <a className="nav-link " href="#">
                <i className="bi bi-search icon" />
              </a>
            </li>
          )}
          <li className="nav-item btn-login"
              onClick={handleOpen}
              >
            <a className="nav-link" href="#">
              <i className="bi bi-person icon" />
            </a>
          </li>
          {openMenu ? (
            <li className="nav-item nav-sm-mt"
                onClick={handleCloseMenu}
                >
              <a
                className="navbar-toggler btn-collapse"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <i className="bi bi-list icon" />
              </a>
            </li>
          ): (
            <li className="nav-item nav-sm-mt"
                onClick={handleOpenMenu}
                >
              <a
                className="navbar-toggler btn-collapse"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <i className="bi bi-list icon" />
              </a>
            </li>
          )}
          
        </ul>
      </div>
      {search && (
        <div className={`search-box ${handleOpenSearch && 'active'}`}>
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
      </div>
      )}
      
    {openMenu && (
      <NavbarMobile handleOpenMenu = {handleOpenMenu}/>
    )}
    {open && (
      <Modal  handleClose = {handleClose} handleOpen = {handleOpen}/>
    )}
    </header>

   
  )
}
