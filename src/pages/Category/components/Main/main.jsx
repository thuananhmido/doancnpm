import React from 'react'
import Categories_item from '../Categories-item/categories-item'
import Categories_Product from '../Categories-product/categories-product'

export default function Main() {
  return (
    <div className="main">
    <section className="category">
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
    {/* Section categories item */}
    <section className='category-item'> 
        <div className="container">
            <div className='wrapper' id="simplebar">
                <div className='horizontal-scrolling__wrapper'>
                    <>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    <Categories_item/>
                    </>
                </div>
            </div>
        </div>
    </section>
    {/* Item-categories-grid */}
    <section className='categories-product'>
        <div className="container">
            <div className="row pt-3">
                <>
                <Categories_Product/>
                <Categories_Product/>
                <Categories_Product/>
                <Categories_Product/>
                <Categories_Product/>
                <Categories_Product/>
                <Categories_Product/>
                <Categories_Product/>
                <Categories_Product/>
                <Categories_Product/>
                <Categories_Product/>
                </>
            </div>
        </div>
    </section>
</div>
  )
}
