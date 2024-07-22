import React from 'react'
import "./Pages.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Pages = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      
  return (




    <section className='category'>
        <div className=" content">
        <Slider {...settings}>
            <div className="boxs">
                <div className="box">
                    <img src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "/>
                    <div className="overlay">
                    <h4>stay calm</h4>
                    <p>title</p>
                </div>
                    <img src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <div className="overlay">
                    <h4>stay calm</h4>
                    <p>title</p>
                </div>
                    <img src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "/>
                    <div className="overlay">
                        <h4>calm</h4>
                    <p>title</p>
                </div>
                    <img src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "/>
                <div className="overlay">
                    <p>title</p>
                </div>
                </div>
            </div>
            </Slider>

        </div>
    </section>
  )
}

export default Pages