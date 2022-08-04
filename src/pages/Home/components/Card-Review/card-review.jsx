import React from 'react'
export default function Card_Review() {
  return (
    <div className="col-md-3 col-md-6-customer">
              <div className="card card-body card-review">
                <div className="rating-star">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <div className="review-customer">
                  <p>
                    Lorem ipsum dolor sit amet, quia non consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
              <footer className="footer-review">
                <img
                  className="rounded-circle"
                  width={50}
                  src="https://cartzilla.createx.studio/img/testimonials/03.jpg"
                  alt=""
                  srcSet=""
                />
                <div className="name-customer">
                  <h6>Davcis</h6>
                  <span className="text-muted opacity-75">20/210/2222</span>
                </div>
              </footer>
            </div>
  )
}
