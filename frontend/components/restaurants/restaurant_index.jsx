import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantFilter from './restaurant_filter';
import SearchContainer from '../search_container';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);

    this.sortRestaurants = this.sortRestaurants.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  sortRestaurants() {
    console.log('in sorting restaurants function')
    console.log('state after clicking', this.state);
  }

  render() {
    return <>
        <div className="link-nav">
          <Link className="link-nav-child" to="/">
            Home
          </Link>
          <span className="link-nav-child">Location</span>
        </div>

        <div className="index-nav">
          <div className="rest-box-form">
            <div className="rest-box-dropdowns">
              <input className="rest-date" type="date" />

              <select className="rest-box-time">
                <option value="12:00">12:00</option>
                <option value="1:00">1:00</option>
                <option value="2:00">2:00</option>
                <option value="3:00">3:00</option>
                <option value="4:00">4:00</option>
                <option value="5:00">5:00</option>
                <option value="6:00">6:00</option>
                <option value="7:00">7:00</option>
                <option value="8:00">8:00</option>
                <option value="9:00">9:00</option>
                <option value="10:00">10:00</option>
              </select>

              <select className="rest-box-num-guests">
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
                <option value="7">7 people</option>
                <option value="8">8 people</option>
              </select>
            </div>
            <SearchContainer />
            {/* <input className="rest-box-search" type="text" placeholder="Find By Cuisine" /> */}
            {/* <button className="rest-box-go">Let's Go</button> */}
          </div>
        </div>

        <div className="parent-container">
          <RestaurantFilter searchRestaurants={this.props.searchRestaurants} fetchRestaurants={this.props.fetchRestaurants}/>

          <div className="results-container">
            <div className="tables-match">
              <span className="rest-available">
                {this.props.restaurants.length} RESTAURANTS AVAILABLE
              </span>
              <select className="right-filter" >
                <option value="" selected>Select A Filter</option>                
                <option value="A-Z" onClick={this.sortRestaurants}>A-Z</option>
              </select>
            </div>

            <ul>
              {this.props.restaurants.map(restaurant => {
                return <RestaurantIndexItem fetchReviews={this.props.fetchReviews} restaurantId={restaurant.id} onClick={this.handleRest} key={restaurant.id} restaurant={restaurant} />;
              })}
            </ul>
          </div>
        </div>
      </>;
  }
}

export default RestaurantIndex;
