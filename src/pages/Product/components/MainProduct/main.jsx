import React from 'react'
import NavComponent from '../NavComponent/nav'
import ProductComponent from '../ProductComponent/product'

export default function Main() {
  return (
    <div className="main">
        <section className="product">
        <div className="category-banner container">
                <nav className="breadcrumb">
                    <ol className="breadcrumb-menu breadcrumb-light">
                        <li className="breadcrumb-item ">
                            <a className='text-nowrap' href="">
                            <i class="bi bi-house"></i>
                                Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a className='text-nowrap' href="">
                            
                                All category</a>
                        </li>
                        <li className="breadcrumb-item active">
                            <a className='text-nowrap' href="">
                            
                                Fire</a>
                        </li>
                    </ol>
                </nav>
                <h1 className='category-title'>Bugers and Fires</h1>
        </div>
    </section>
    {/* Page navigation */}
    <section>
        <NavComponent/>
    </section>
    <section>
        <div className="container">
            <h2 className='title-product'>Pizzza</h2>
            <div className="row pt-3">
                <>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                </>
            </div>
        </div>
    </section>
</div>
    
    
  )
}
