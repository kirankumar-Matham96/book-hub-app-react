import SliderComponent from '../SliderComponent'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div className="home-content-container">
      <h1 className="main-heading">Find Your Next Favorite Books?</h1>
      <p className="home-description">
        You are in the right place. Tell us what titles or genres you have
        enjoyed in the past, and we will ive you surprisingly insightful
        recommendations.
      </p>
      <button type="button" className="find-books-button">
        Find Books
      </button>
    </div>
    <SliderComponent />
    <Footer />
  </div>
)

export default Home
