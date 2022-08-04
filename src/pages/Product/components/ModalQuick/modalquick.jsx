import React from 'react'
import {Link} from 'react-router-dom'
export default function ModalQuick(props) {
  return (
    <>
    <div className={`modal modal-quick ${props.handleOpen && 'show' }`} tabIndex={-1} role = "dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Pizzza</h4>
                    <button className='btn btn-close' onClick={props.handleClose} type='button'><i class="bi bi-x-circle"></i></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/single/large-preview.jpg" alt="" className='imageProduct'/>
                        </div>
                        <div className="col-md-6">
                            <div className="product-detail">
                                <div className='product-price'>
                                    <span>$15 <small>.99</small></span>
                                </div>
                                <form className='addForm' action="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="product-size">
                                                <label className='form-label' htmlFor="pizza-size">Size :</label>
                                                <select className='form-select' name="" id="">
                                                    <option value="small">Small</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="large">Large</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="product-size">
                                                <label className='form-label' htmlFor="pizza-base">Size :</label>
                                                <select className='form-select' name="" id="">
                                                    <option value="small">Small</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="large">Large</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <div className="product-number">
                                                <select className='form-select' name="" id="">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <Link to = '/cart' className='btn btn-danger' type='submit'>Add to cart</Link>
                                        </div>
                                    </div>
                                </form>
                                <div className="info">
                                    <h5 className='productInfo'>Product Info</h5>
                                    <h6 className='ingredients'>Ingredients:</h6>
                                    <p>Samali, Olives , Mushrooms</p>
                                    <h6 className='calories'>Calories</h6>
                                    <p>2000klc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
