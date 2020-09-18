
import React, { Component } from 'react'
import FlexItemProduct from '../components/ItemProduct'
// import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux'
import { loadAdds } from '../actions'




class BoxProducts extends Component {
    constructor(props){
    super(props) 
        this.state = {
            page: 1,
            hasMore: true,
            limit: 3
        }

    }
    componentDidMount() {
        console.log(this.state.page)
        console.log(this.state.limit)
        this.props.loadAdds(this.state.page, this.state.limit)
    }
    componentWillUnmount() {
        console.log('unmount')
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


// const mapStateToProps = (state) => ({
//     product: state.product.rows,
//     totalPage: state.product.totalPage
// })

const mapDispatchToProps = (dispatch) => ({
    loadAdds: (page, limit) => dispatch(loadAdds(page, limit)),

})

export default connect(
    null,
    mapDispatchToProps
)(BoxProducts)