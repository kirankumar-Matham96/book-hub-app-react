import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'
import './index.css'

const apiStateConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SliderComponent extends Component {
  state = {
    topRatedBooksList: [],
    apiStatus: apiStateConstants.initial,
  }

  componentDidMount = () => {
    this.getTopRatedBooks()
  }

  getTopRatedBooks = async () => {
    this.setState({apiStatus: apiStateConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedBooksData = data.books.map(eachBook => ({
      authorName: eachBook.author_name,
      coverPicture: eachBook.cover_pic,
      id: eachBook.id,
      title: eachBook.title,
    }))
    if (response.ok) {
      this.setState({
        apiStatus: apiStateConstants.success,
        topRatedBooksList: updatedBooksData,
      })
    } else {
      this.setState({apiStatus: apiStateConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div>
      <h1>Not Found!</h1>
    </div>
  )

  renderSuccessView = () => {
    const {topRatedBooksList} = this.state

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    }

    return (
      <Slider {...settings} className="slider-container">
        {topRatedBooksList.map(eachItem => (
          <div className="slick-item-container" key={eachItem.id}>
            <img
              src={eachItem.coverPicture}
              alt="some img"
              className="slick-image"
            />
            <h3 className="slick-item-title">{eachItem.title}</h3>
            <p className="slick-item-description">{eachItem.authorName}</p>
          </div>
        ))}
      </Slider>
    )
  }

  renderBasedOnApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStateConstants.inProgress:
        return this.renderLoadingView()
      case apiStateConstants.success:
        return this.renderSuccessView()
      case apiStateConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="slider-bg-container">
        <h2 className="sub-heading"> Top Rated Books </h2>
        {this.renderBasedOnApiStatus()}
      </div>
    )
  }
}
export default SliderComponent
