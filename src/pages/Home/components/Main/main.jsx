import React from 'react'
import {useEffect, useState} from 'react'
import Card_Review from '../Card-Review/card-review'
import Products from '../Products-Item/products'
import Restaurant from '../Restaurant-Item/restaurant-item'
import {FaArrowCircleUp} from 'react-icons/fa'
import {Button} from './styles.js'
import ToolBar from '../Toolbar/toolbar'
export default function Main() {

    const [showGoToTop, setShowGoToTop] = useState(false);
    const [openDropdown,setOpenDropDown] = useState(false);

    const handleOpenDropdown = (() => {
      setOpenDropDown(true)
    })
    const handleCloseDropdown = (() => {
      setOpenDropDown(false)
    })

    // handleScroll
    useEffect(() => {
     const  handleScroll = () => {
        setShowGoToTop(window.scrollY  >= 200)
      }
      window.addEventListener('scroll',handleScroll)
      // cleanup fucntion
      // tránh leak bộ nhớ khi scroll bị gọi liên tục
      return () => {
        window.removeEventListener('scroll',handleScroll)
      }
    },[])
    // fuction scroll to top
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };

    return (
      <>
        <div className="main">
          <section className="banner">
            <div className="bg-banner">
              <div className="row row-banner justify-content-center pb-5">
                <div className="banner-content">
                  <h5 className="text-light text-center ">
                    #1 Food Delivery Service since 2010
                  </h5>
                  <div className="text-light h1 mb-3 p-4">
                    We deliver your favorite food fresh &amp; fast in
                    <div className="dropdown d-inline-block ms-1">
                      {openDropdown ? (
                          <a
                          href="#"
                          className="dropdown-toggle"
                          id="btn-dropdown-location"
                          onClick={handleCloseDropdown}
                        >
                          NewYork
                        </a>
                      ):(
                        <a
                        href="#"
                        className="dropdown-toggle"
                        id="btn-dropdown-location"
                        onClick={handleOpenDropdown}
                      >
                        NewYork
                      </a>
                      )}
                      
                      <div
                        className={`dropdown-menu dropdown-menu-end slide-animation ${openDropdown && 'active'} `}
                        id="dropdown-location"
                      >
                        <a className="dropdown-item fs-base" href="">
                          Quy Nhơn
                        </a>
                        <a className="dropdown-item fs-base" href="">
                          Quy Nhơn
                        </a>
                        <a className="dropdown-item fs-base" href="">
                          Quy Nhơn
                        </a>
                        <a className="dropdown-item fs-base" href="">
                          Quy Nhơn
                        </a>
                        <a className="dropdown-item fs-base" href="">
                          Quy Nhơn
                        </a>
                      </div>
                    </div>
                  </div>
                  <a className="btn btn-danger" href="#category">
                    What do you want to eat?
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Section Categories */}
          <section className="categories container" id="category">
            <h2 className="text-center pt-4 ">Trending food in your city</h2>
            <p className="pt-4 text-center text-muted mb-5">
              Choose what you want and we dilever it to you
            </p>
            <div className="row">
              <>
              <Products/>
              <Products/>
              <Products/>
              <Products/>
              <Products/>
              <Products/>
              <Products/>
              <Products/>
              <Products/>
              </>
            </div>
          </section>
          {/* Section Mobile APP */}
          <section className="mobile-app">
            <div className="banner-mobile pt-2 ">
              <div className="container">
                <div className="row row-mobile">
                  <div className="col-md-6 col-md-12-customer mobile-title text-start text-sm-center">
                    <h2 className="text-light mb-3">
                      Order food on the go with Cartzilla App
                    </h2>
                    <p className="text-light d-block opacity-70">
                      Pay with in app wallet, collect loyalty points, track your orders
                      in real time and much more.
                    </p>
                    <div className="download">
                      <a href="" className="btn-market btn-apple" role="button">
                        <span className="btn-market-sub">Download on the</span>
                        <span className="btn-market-sub">App Store</span>
                      </a>
                      <a href="" className="btn-market btn-google" role="button">
                        <span className="btn-market-sub">Download on the</span>
                        <span className="btn-market-sub">App Store</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-md-12-customer">
                    <div className="phone-image">
                      <img
                        className=" d-block phone"
                        width={330}
                        src="../Assets/Images/phone.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Become a courrier */}
          <section className="become-section container">
            <div className="row become-row">
              <div className="col-md-6 col-sm-12 col-md-12-customer ">
                <div className="become-col row">
                  <div className="become-title col-md-6 col-sm-12 ">
                    <h2>Become a courrier</h2>
                    <p className="text-muted pb-2">
                      {" "}
                      Earn competitive salary as delivery courier working flexible
                      schedule.
                    </p>
                    <a className="btn btn-danger  mt-2 mt-sm-0" href="">
                      Start
                    </a>
                  </div>
                  <img
                    className="become-image col-md-6 col-sm-12"
                    width={272}
                    src="../Assets/Images/courier.png"
                    alt=""
                    srcSet=""
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-sm-2 col-md-12-customer">
                <div className="become-col row">
                  <div className="become-title col-md-6 col-sm-12">
                    <h2>Become a courrier</h2>
                    <p className="text-muted pb-2">
                      {" "}
                      Earn competitive salary as delivery courier working flexible
                      schedule.
                    </p>
                    <a className="btn btn-danger mt-2 mt-sm-0" href="">
                      Start
                    </a>
                  </div>
                  <img
                    className="become-image col-md-6 col-sm-12"
                    width={272}
                    src="../Assets/Images/courier.png"
                    alt=""
                    srcSet=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Restaurants Section */}
          <section className="restaurant-section container">
            <h2>Popular restaurant in your city</h2>
            <p className="text-muted">Check the best restaurants near you</p>
            <div className="row">
              <>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              </>
            </div>
          </section>
          {/* Customer Review */}
          <section className="customer-section">
            <div className="customer-bg">
              <div className="container">
                <h2 className="customer-title">Customer Reviews</h2>
                <div className="slider-review">
                  <div className="row">
                    <>
                    <Card_Review/>
                    <Card_Review/>
                    <Card_Review/>
                    <Card_Review/>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </section>
  </div>
  <ToolBar/>
    {showGoToTop && (
      <Button>
      <FaArrowCircleUp onClick={scrollToTop}/>
     </Button>
    )}
  </>
    )
}
