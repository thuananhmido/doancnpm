import React from 'react'

export default function ItemComponent() {
  return (
    <>
    <div className="row">
        <div className="col-md-10">
        <div className="row">
            <div className="col-md-2 col-sm-12 col-mb-customer">
                <a href="" className='imgProduct'>
                    <img src="https://cartzilla.createx.studio/img/food-delivery/cart/01.jpg" width={120} height={120} alt="" />
                </a>
            </div>
            <div className="col-md-10 col-sm-12 col-mb-customer">
                <div className="info-product-cart">
                    <h3 className='mb-2'>Pizzza</h3>    
                    <div className="size mb-2">
                        <span>Size : Medium</span>
                    </div>
                    <div className="base mb-2">
                        <span>Size : Standers</span>
                    </div>
                    <div className="price mb-2">
                        <span>Price : Standers</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="col-md-2">
        <div className="quantity">
            <div className="text-center">
                <label htmlFor="" className='form-label'>Quantity</label>
                <input type="number" className='form-control' name="" id="" />
                <button className='btn btn-link '> x Remove</button>
            </div>
        </div>
        </div>
</div>
<hr />
    </>
  )
}
