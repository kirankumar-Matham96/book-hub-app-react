import {Component} from 'react'
import Slider from 'react-slick'
import './index.css'

export default class SliderComponent extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="slider-bg-container">
        <h2 className="sub-heading"> Top Rated Books </h2>
        <Slider {...settings} className="slider-container">
          <div className="slider-item-container">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656947867/MiniProjects/BookHub/slick-1.png"
              alt=""
              className="slider-image"
            />
            <p className="slider-item-title">Heading</p>
            <p className="slider-item-description">Description</p>
          </div>
          <div className="slider-item-container">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656947867/MiniProjects/BookHub/slick-1.png"
              alt=""
              className="slider-image"
            />
            <p className="slider-item-title">Heading</p>
            <p className="slider-item-description">Description</p>
          </div>
          <div className="slider-item-container">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656947867/MiniProjects/BookHub/slick-1.png"
              alt=""
              className="slider-image"
            />
            <p className="slider-item-title">Heading</p>
            <p className="slider-item-description">Description</p>
          </div>
          <div className="slider-item-container">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656947867/MiniProjects/BookHub/slick-1.png"
              alt=""
              className="slider-image"
            />
            <p className="slider-item-title">Heading</p>
            <p className="slider-item-description">Description</p>
          </div>
          <div className="slider-item-container">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656947867/MiniProjects/BookHub/slick-1.png"
              alt=""
              className="slider-image"
            />
            <p className="slider-item-title">Heading</p>
            <p className="slider-item-description">Description</p>
          </div>
          <div className="slider-item-container">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656947867/MiniProjects/BookHub/slick-1.png"
              alt=""
              className="slider-image"
            />
            <p className="slider-item-title">Heading</p>
            <p className="slider-item-description">Description</p>
          </div>
          <div className="slider-item-container">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656947867/MiniProjects/BookHub/slick-1.png"
              alt=""
              className="slider-image"
            />
            <p className="slider-item-title">Heading</p>
            <p className="slider-item-description">Description</p>
          </div>
        </Slider>
      </div>
    )
  }
}
