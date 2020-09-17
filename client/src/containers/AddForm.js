import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import React from 'react'



export default class AddForm extends React.Component {
    super(props) {


    }

    render() {

        return (

            <div>
                <div class="container-card container">
                    <div class="card mb-3">
                        <div class="card-header card-header-custom h2">ADD ADDS</div>
                        <div class="card-body text-dark">
                            <form>
                                <div class="flexCustom flexlogin d-flex mt-5 mb-5 flex-column align-items-center">
                                    <div class="my-1 w-75">
                                        <label forHTML="title" class="text-white font-weight-bold">Title</label>
                                        <input
                                            class="form-control form-control-lg"
                                            type="text"
                                            placeholder="Title"
                                            id="inputEmail"
                                            required
                                        />
                                    </div>

                                    <div class="my-3 w-75">

                                        <div class="form-group">
                                            <label className="text-white font-weight-bold" for="exampleFormControlSelect1">Rate</label>
                                            <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="my-3 w-75">
                                        <label for="inputPassword" class="text-white font-weight-bold">Description</label>
                                        <textarea
                                            class="form-control form-control-lg"
                                            type="Password"
                                            placeholder="Description"
                                            required
                                        />
                                    </div>

                                    <div class="my-1 w-75">
                                        <label forHTML="price" class="text-white font-weight-bold">Price</label>
                                        <input
                                            class="form-control form-control-lg"
                                            type="number"
                                            placeholder="Price"
                                            required
                                            min="1" step="any"
                                        />
                                    </div>

                                    <div class="mt-3 w-75">
                                        <label forHTML="brand" class="text-white font-weight-bold">Brand</label>
                                        <input
                                            class="form-control form-control-lg"
                                            type="text"
                                            placeholder="Brand"
                                            required
                                            min="1" step="any"                                        />
                                    </div>

                                    <div class="my-3  w-75">
                                        <label for="inputPassword" class="text-white font-weight-bold">Description</label>
                                        <textarea
                                            class="form-control form-control-lg"
                                            type="Password"
                                            placeholder="Description"
                                            required
                                            rows="5"
                                        />
                                    </div>
                                    <div class="mt-3 mb-5 w-75">
                                        <label forHTML="brand" class="text-white font-weight-bold">Brand</label>
                                        <input
                                            class="form-control form-control-lg"
                                            type="file"
                                            placeholder="Brand"
                                            required
                                            min="1" step="any"                                        />
                                    </div>
                                </div>


                                <div class="d-flex  mt-5 justify-content-center ">
                                    <button type="submit" class="btn-success btn btn-lg p-2 mx-1 mb-2">Login</button>
                                    <button type="submit" class="btn-warning btn btn-lg p-2 mx-1 mb-2">Cancel</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}