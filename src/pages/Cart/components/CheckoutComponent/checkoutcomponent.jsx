import React from 'react'
export default function CheckoutComponent() {
  return (
    <>
      <div className="row pb-4 pt-3 pd-auto">
          <div className="col-md-6 mb-4">
            <div className="form-group">
              <label htmlFor="" className='form-label'>Quantity</label>
              <input type="text" className='form-control' name="" id="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="" className='form-label'>Quantity</label>
              <input type="text" className='form-control' name="" id="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="" className='form-label'>Quantity</label>
              <input type="text" className='form-control' name="" id="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="" className='form-label'>Quantity</label>
              <input type="text" className='form-control' name="" id="" />
            </div>
          </div>
      </div>
      <h3 className='pd-auto mt-3'>Delevery Address</h3>
      <div className="row mt-3 pd-auto">
        <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="" className='form-label'>Quantity</label>
              <input type="text" className='form-control' name="" id="" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="" className='form-label'>Quantity</label>
              <input type="text" className='form-control' name="" id="" />
            </div>
        </div>
        <div className="col-md-12 mt-2">
            <div className="form-group">
                <label className="form-label mb-3" for="order-comments">
                    <span className="badge bg-info fs-xs me-2">Note</span>
                    Additional comments
                </label>
                <textarea className="form-control mt-3" rows="4" id="order-comments"></textarea>
            </div>
        </div>
      </div>
      <div className="row mt-3 pd-auto pb-4">
        <div className="col-md-6">
          <h3>Cash on delevery</h3>
            <div className="delivery mt-3">
              <input type="text" className='form-control' name="" id="" />
              <a href="" className='btn btn-danger mt-3 mb-3 w-100'>Checkout</a>
            </div>
        </div>
        <div className="col-md-6">
          <div className="total">
            <div className="total-content">
              <h2 className='pd-3'>Your Total</h2>
              <div className="sub-total mt-3">
                <span>SubTotal:</span>
                <span>24$</span>
              </div>
              <div className="sub-total mt-3">
                <span>SubTotal:</span>
                <span>24$</span>
              </div>
              <div className="sub-total mt-3">
                <span>SubTotal:</span>
                <span>24$</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
