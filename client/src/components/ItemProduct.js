import React, { Fragment } from 'react'
import history from 'history'
import iphone from '../assets/phones.png'
import iphone2 from '../assets/phones2.png'
import StarRatings from 'react-star-ratings';
import {
   Link,
   useRouteMatch
  } from "react-router-dom";

export default function ItemProduct (props ){
    let match = useRouteMatch()

    console.log(match)
   const numToRupiah = (num) => {
        const stringedNumber = num.toString()
        let rupiah = ''
        //reverse the string
        let reversedStringNum = stringedNumber.split('').reverse().join('')
        console.log(reversedStringNum)
        for (let i = 0; i < reversedStringNum.length; i++) {

            if (i % 3 === 0) rupiah += reversedStringNum.substr(i, 3) + '.'
        }

        return `Rp.${rupiah.split('').reverse().join('').slice(1)},-`
    }

   
        return (
            <div className="card col-10 col-md-3 mx-3 my-3 card-custom text-center" >
                <img className=" card-img-top rounded mx-auto d-block img-custom mt-3" src={props.image} alt="Card image cap" />
                <div className=" card-body ">
                    <h3 className="card-title font-weight-bold">{props.title}</h3>
                    <StarRatings
                        rating={props.rate}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                    />
                    <p className="card-text text-custom">{props.description}</p>
                    <h2>{numToRupiah(props.price)}</h2>
                </div>
                <Link to={`/detail/${props.id}`} className=" btn btn-primary w-50 text-custom mx-auto mb-3">See Details!</Link>
            </div>

        )
    

}