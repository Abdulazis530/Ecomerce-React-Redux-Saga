
import React, { Component } from 'react'
import FlexItemProduct from '../components/ItemProduct'

export default class BoxProducts extends Component {
    super(props) {


    }
    componentDidMount() {

    }

    render() {
        const looper = [1, 2, 3, 4, 6, 7, 8, 9, 1, 1]
        const items = looper.map((nothing, i) =>
            <FlexItemProduct index={i} />
        )

        return (


            <div className="container my-5">

                <div className='row justify-content-center'>
                    {items}
                </div>

            </div>
        )
    }
}