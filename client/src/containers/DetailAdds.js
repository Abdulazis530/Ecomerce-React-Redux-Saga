import { BrowserRouter as Router, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import React, { Component } from 'react'
import iphone from '../assets/iphone.png'


export default class DetailAdds extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(<div className='container'>
        
           <div className="card">
           <div className="card-header">
                <h1>DETAIL PRODUCT</h1>
           </div>
          
           <div className='row my-5'>
                <div className='col'> <img className=" card-img-top rounded mx-auto d-block img-custom2 mt-3" src={iphone} alt="Card image cap" /></div>
                <div className='col'>
                <h3> <strong>Samsung Galaxy S4 I337 16GB 4G LTE Unlocked GSM Android Cell Phone</strong></h3>
                <p style={{color:"#337ab7",display:'inline'}} className='text-left'>Samsung </p>
                <small style={{color:"#337ab7"}}>(5054 votes)</small>
        
                
                </div>
            </div>
            <div className='row'>
                <div className='col'><h1>testimoni</h1></div>
                <div className='col'><h1>TOTOTOTOT</h1></div>
            </div>
           </div>
  
         
        </div>)

    }

}