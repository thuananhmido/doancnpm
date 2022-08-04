import React from 'react'
import ItemComponent from '../ItemComponent/itemcomponent'
import TotalComponent from '../TotalComponent/totalcomponent'
export default function CartComponent() {
  return (
    <>
      <div className="row pd-auto {}">
        <div className="col-md-8">
            <ItemComponent/>
            <ItemComponent/>
        </div>
        <div className="col-md-4">
            <TotalComponent/>
        </div>
    </div>
    </>
  )
}
