import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to our premier online shopping destination, your one-stop emporium for the finest in fashion, accessories, and cutting-edge electronics. At our e-commerce store, we cater to the discerning tastes of both men and women, offering an extensive range of exquisite jewelry and the latest gadgets.

Explore our vast collection of jewelry, where timeless elegance meets contemporary design. From dazzling diamond necklaces to sleek and stylish watches, we curate a selection that caters to every occasion and personal style. Whether you're looking for the perfect gift or a statement piece to elevate your own collection, our jewelry section is sure to enchant you.

In the world of electronics, we bring you the latest in technology and innovation. Discover a range of high-performance gadgets, from smartphones and tablets to state-of-the-art headphones and smart home devices. Stay connected and ahead of the curve with our top-notch electronic offerings.

Our user-friendly website ensures a seamless shopping experience, with detailed product descriptions, high-quality images, and secure payment options. We pride ourselves on delivering exceptional customer service and guaranteeing the authenticity and quality of all our products.

Browse our store today to find the perfect blend of style and functionality. Whether you're shopping for yourself or a loved one, our e-commerce site is your go-to destination for fashion, accessories, and cutting-edge electronics. Elevate your shopping experience with us and indulge in the ultimate online retail therapy.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage