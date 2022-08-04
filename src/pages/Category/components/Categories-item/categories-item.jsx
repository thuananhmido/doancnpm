import React from 'react'

export default function Categories_item() {
  return (
    <div className='horizontal-scrolling__card'>
        <div className="item-cate-img item-sm ">
            <a href="#" className=" title d-block">
                <div className="image-categories">
                <img
                    className="img-cate"
                    src="https://cartzilla.createx.studio/img/food-delivery/icons/noodles.svg"
                    alt=""
                    width={60}
                    srcSet=""
                />
                </div>
                <h6 className="title-cate">Buger and Fires</h6>
            </a>
        </div>
    </div>
  )
}
