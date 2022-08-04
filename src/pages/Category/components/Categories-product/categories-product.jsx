import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
export default function Categories_Product() {
  return (
    <div className="col-md-4 col-sm-6 mb-grid-gutter">
        <Link to='/product' className="card product-card">
            <span className='badge badge-price'>AMC 17 <small>.00</small> </span>
            <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/01.jpg"
                className='card-img-top' alt="" srcset="" />
                <div className=" restaurant-item-cate">
                <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/logos/01.png" className='restaurant-images' alt="" srcset="" />
                </div>
                <div className="card-body card-category">
                <h3 className='retaurant-title'>Donnas</h3>
                <div className="text-muted">
                Burgers, Salads, French fries, Drinks
                </div>
                </div>
        </Link>
    </div>
  )
}
