import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { loadDetailAdds, upvote, devote, resetDetailAdds, updateVote } from '../actions'


class DetailAdds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            voted: false,

        }
    }
    componentDidMount() {
        const detailId = Number(this.props.match.params.id)
        this.props.loadDetailAdds(detailId)
    }
    componentWillUnmount() {
        const detailId = Number(this.props.match.params.id)
        const vote = this.props.data.vote
        const history=this.props.history
        this.props.updateVote(detailId, vote,history)

    }

    handleVote = (e) => {
        e.preventDefault()
        this.setState((state) => ({
            voted: !state.voted
        })
        )
        if (e.target.name === 'vote') {
            this.props.upvote()
        } else {
            this.props.devote()
        }
    }
    handleBackToHome = (e) => {
        e.preventDefault()
        if (e.target.name === 'addCart') {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'iItem added to cart successfully!',
                showConfirmButton: false,
                timer: 1200
            }).then(() => this.props.history.push('/'))
        } else {
            this.props.history.push('/')
        }
    }
    render() {
        const { brand, title, detail_product, price, image, vote } = this.props.data
        return (<div className='container'>

            <div className="card">
                <div className="card-header bg-danger">
                    <h1 className='h1'>DETAIL PRODUCT</h1>
                </div>
                <div className='card-body'>

                    <div className='row my-2'>
                        <div className='col-12'>
                            <h3> <strong>{title}</strong></h3>
                            <p style={{ color: "#337ab7", display: 'inline' }} className='text-left'>{brand} </p>
                            <small style={{ color: "#337ab7" }}>({vote === null ? 0 : vote} votes)</small>
                            <h6 className="mt-2"><small>PRICE</small></h6>
                            <h3>{price}</h3>
                        </div>


                    </div>
                    <div className='row '>

                        <div className='col-12'>
                            <h2></h2>
                            <img className="card-img-top rounded mx-auto d-block img-custom2 mt-1" src={image} alt="Card image cap" />
                        </div>


                        <div className='col-12 test-text' >
                            <h3 className="ml-5 h3">More Detail</h3>

                            <ReactMarkdown
                                source={detail_product}
                                escapeHtml={false}
                                className='ml-5'
                            />

                        </div>
                    </div>

                </div>


                <div className='card-footer'>
                    <button type='button' className='btn btn-success btn-lg mx-3' name='addCart' onClick={this.handleBackToHome}> <i className="fas fa-cart-plus mr-1" ></i>Add to cart</button>
                    <button type='button' className='btn btn-danger btn-lg mx-3' name='cancel' onClick={this.handleBackToHome}> <i className="fas fa-times mr-1"></i> Cancel</button>
                    {this.state.voted ? <button type='button' className='btn btn-warning btn-lg mx-3' name='devote' onClick={this.handleVote}> Devote</button> : <button type='button' className='btn btn-info btn-lg mx-3' name='vote' onClick={this.handleVote}>Vote</button>}


                </div>



            </div>

        </div>)

    }

}

const mapStateToProps = (state) => ({
    data: state.detailAdds

})

const mapDispatchToProps = (dispatch) => ({
    loadDetailAdds: (id) => dispatch(loadDetailAdds(id)),
    upvote: () => dispatch(upvote()),
    devote: () => dispatch(devote()),
    updateVote: (id, vote,history) => dispatch(updateVote(id, vote,history))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailAdds)