
import React, { Component } from 'react'
import FlexItemProduct from '../components/ItemProduct'
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux'
import { loadAdds,resetAdds } from '../actions'




class BoxProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            hasMore: true,
            limit: 3
        }

    }
    componentDidMount() {
        console.log('didmount excuted')

        this.props.loadAdds(this.state.page, this.state.limit)
    }

    componentWillUnmount() {
        console.log('unmount excuted')
        this.props.resetAdds();
    }
    fetchData = () => {
        if (this.state.page < this.props.totalPage) {
            this.setState(
                state => ({ page: state.page + 1 }),
                () => {
                    this.props.loadAdds(this.state.page, this.state.limit)
                })
        } else if (this.state.page == this.props.totalPage) {
            this.setState({ hasMore: false })
        }
    }

    render() {
        const adds = this.props.adds.map((item, index) => {
            return <FlexItemProduct
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                brand={item.brand}
                detailProduct={item.detail_product}
                image={item.image}
                rate={item.rate}
            />

        })


        return (

            <InfiniteScroll
                dataLength={this.props.adds.length}
                next={this.fetchData}
                hasMore={this.state.hasMore}
                height={600}
                className='my-5'
                loader={
                    <div className="d-flex justify-content-center">
                        <h4>Loading...</h4>
                    </div>
                }
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }

                scrollThreshold={1}
            >
                <div className="container my-5">

                    <div className='row justify-content-center my-5'>
                        {adds}
                    </div>

                </div>
            </InfiniteScroll>


        )
    }
}


const mapStateToProps = (state) => ({
    adds: state.adds.data,
    totalPage: state.adds.totalPage
})

const mapDispatchToProps = (dispatch) => ({
    loadAdds: (page, limit) => dispatch(loadAdds(page, limit)),
    resetAdds: () => dispatch(resetAdds())

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoxProducts)