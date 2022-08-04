import React from 'react'
import { useState } from 'react';
import ModalQuick from '../ModalQuick/modalquick';
import './style.css'
export default function ProductComponent() {
    const [open,setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };
  return (
    <>
       <div className="col-md-4 mb-grid-gutter">
            <div className="card product-card">
                <a href="#" onClick={handleOpen}>
                    <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/single/01.jpg" className='card-img-top' alt="" srcSet="" />
                </a>
                <div className="card-body">
                    <h3 className="product-title">
                        <a href="">Pizzza vatecito</a>
                    </h3>
                    <p className="text-muted">Lorem Fugiat, cusandae corMagni!</p>
                    <div className="size-product">
                        <div className="btn-group" role="group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                            <label className="btn-size btn-outline-primary" htmlFor="btnradio1">Radio 1</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                            <label className="btn-size btn-outline-primary" htmlFor="btnradio2">Radio 2</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                            <label className="btn-size btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
                        </div>
                    </div>
                    <div className="option-product">
                        <div className="btn-group" role="group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" defaultChecked />
                            <label className="btn-size btn-outline-primary" htmlFor="btnradio5">Radio 1</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio6" autoComplete="off" />
                            <label className="btn-size btn-outline-primary" htmlFor="btnradio6">Radio 2</label>
                        </div>
                    </div>
                    <div className="info-product">
                        <div className="price-product">
                            <span>12.00$</span>
                        </div>
                        <div className="btn btn-danger">
                            <i class="bi bi-cart-dash"></i>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        {/* Quick view modal */}
        {open && (
            <ModalQuick handleClose = {handleClose} handleOpen = {handleOpen}/>
        )}
    </>
  )
}
