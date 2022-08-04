import React from 'react'

export default function NavComponent() {
  return (
    <nav className="container page-nav">
            <div className='page-nav-wrapper'>
                <div className="row">
                    <div className="col-md-3 col-sm-6-customer">
                        <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/logos/02.png" width={150} alt=""  />
                    </div>
                    <div className="col-md-9 col-sm-6-customer">
                        <div className="page-menu">
                            <ul className="nav nav-tabs nav-tabs-product">
                                <li className="nav-item active">
                                    <a href="" className="nav-link active">Pizzza</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">Pizzza</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">Pizzza</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">Pizzza</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown menu">
                            <button class="btn btn-danger" type="button" id="dropdownMenuButton1">
                                Menu
                            </button>
                            <div className="drop-menu">
                                <ul class="dropdown-menu drop-menu-product" aria-labelledby="dropdownMenuButton1" id="dropMenuOne">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  )
}
