import React from 'react'
import  { useState } from "react";
import CartComponent from './components/CartComponent/cartcomponent'
import {Link} from 'react-router-dom'
import './style.css'
import CheckoutComponent from './components/CheckoutComponent/checkoutcomponent'
import CheckOutContext from './components/CartContext/checkoutcontext';
export default function Cart() {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        setActiveTab("tab2");
      };
  return (
    <>
        <div className="container">
            <div className="row">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="cart-panel">
                    <ul class="nav nav-tabs nav-cart">
                        <li className={activeTab === "tab1" ? " nav-item py-4 active" : "nav-item py-4" }
                            onClick = {handleTab1}>1. Your order</li>
                        <li className={activeTab === "tab2" ? " nav-item py-4 active" : "nav-item py-4" }
                            onClick = {handleTab2}>2. Checkout</li>
                    </ul>
                    {activeTab === "tab1" ? 
                    // <CheckOutContext.Provider value ={handleTab2}>
                    //     <CartComponent/> 
                    // </CheckOutContext.Provider>
                    <CartComponent/> 
                        : <CheckoutComponent />}
                </div>
            </div>
        </div>
    </>
  )
}
