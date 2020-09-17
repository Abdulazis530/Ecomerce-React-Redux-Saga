import React, { Fragment } from 'react'
import history from 'history'
import iphone from '../assets/phones.png'
import iphone2 from '../assets/phones2.png'
import StarRatings from 'react-star-ratings';
export default class FlexItemProduct extends React.Component {


    render() {
        return (
            <div className="card col-10 col-md-3 mx-3 my-3 card-custom">
                <img className=" card-img-top rounded mx-auto d-block img-custom" src={iphone} alt="Card image cap" />
                <div className=" card-body ">
                    <h3 className="card-title font-weight-bold">Card title</h3>
                    <StarRatings
                        rating={5}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                    />
                    <p className="card-text text-custom">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h2>RP.35.000,00</h2>
                </div>
                <a href="#" className=" btn btn-primary w-50 text-custom mb-3">See Details!</a>
            </div>

        )
    }

}