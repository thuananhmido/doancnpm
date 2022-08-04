import React, { useContext } from 'react'
import CheckOutContext from '../CartContext/checkoutcontext'
export default function TotalComponent() {
    // const {handleTab2} = useContext(CheckOutContext)
  return (
    <>
    <div className="total py-4">
        <div className="total-content">
            <div className="total-price">
                <h3 className='total-title py-2'>Total</h3>
                <h4 className='price-title py-2'>$24</h4>
            </div>
            <div className="comment">
                <label className="form-label label-comment mb-3" htmlFor='order-comments'>
                    <span className="badge bg-info fs-xs me-2">Note</span>
                    Additional comments
                </label>
                <textarea className="form-control mt-3" rows="4" id="order-comments"></textarea>
            </div>
            <h3 className='mb-3'>Apply promo code</h3>
            <input type="text" className='form-control' name="" id="" />
            <a href="#"  className='btn btn-danger mt-3 mb-3 w-100'>Checkout</a>
        </div>
    </div>
    </>
  )
}
