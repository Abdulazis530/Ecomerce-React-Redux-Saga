import React from 'react'
import { Link } from 'react-router-dom'
import iphone2 from '../assets/phones.png'
export default function Navbar() {
    return (
        <section className="colored-section " id="title">

            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <a className="navbar-brand" href="/#">TokoHape.</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Download</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="row">

                    <div className="col-lg-6">
                        <h1 className="big-heading">Belanja hape baru hanya di TokoHape, Gratis ongkir seumur hidup.</h1>
                        <Link to='/add' className="mt-5 btn btn-dark btn-lg c"><i className="fas fa-cart-plus"></i> Add Item</Link>

                    </div>

                    <div class="col-lg-6">

                        <img class="title-image" src={iphone2} alt="iphone-mockup" />
                    </div>

                </div>

            </div>
        </section>





    )



}