import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Category from '../../../Category'

import ProductComponent from '../../../Product/components/ProductComponent/product'
export default function Products() {
  return (
    <div className="col-md-4 mb-grid-gutter ">
        <Link className="card border-0 shadow" to='/category'>
          <img
            className="card-img-top"
            src="https://cartzilla.createx.studio/img/food-delivery/category/01.jpg"
            alt=""
            srcSet=""
          />
          <div className="card-body text-center">
            <h3 className="h5 mt-1">Bugers and Fires</h3>
          </div>
        </Link>
      </div>
  )
}
