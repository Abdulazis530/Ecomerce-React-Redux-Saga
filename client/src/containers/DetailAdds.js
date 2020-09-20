import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import iphone from '../assets/iphone.png'
import Swal from 'sweetalert2'
import numToRupiah from '../helpers/rupiah'
// import { connect } from 'react-redux'
// import { loadAddsDetail,resetAddsDetail } from '../actions'


export default class DetailAdds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            voted: false,
            voteNumber: 5000
        }
    }
    componentDidMount() {
        console.log('didMount in detail adds')

        const detailId = Number(this.props.match.params.id)
        console.log(detailId)
    }
    componentWillUnmount() {

    }

    handleVote = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        this.setState((state) => ({
            voted: !state.voted
        })
        )
        if (e.target.name === 'vote') {
            this.setState(state => ({
                voteNumber: state.voteNumber + 1
            })
            )
        } else {
            this.setState(state => ({
                voteNumber: state.voteNumber - 1
            }))
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
        const testMarkdown = `# heading 
        Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and 
              more recently with desktop publishing software like Aldus PageMaker
               including versions of Lorem Ipsum.`
        const testPrice = 25000
        return (<div className='container'>

            <div className="card">
                <div className="card-header bg-danger">
                    <h1 className='h1'>DETAIL PRODUCT</h1>
                </div>
                <div className='card-body'>

                    <div className='row my-2'>
                        <div className='col-12'>
                            <h3> <strong>Samsung Galaxy S4 I337 16GB 4G LTE Unlocked GSM Android Cell Phone</strong></h3>
                            <p style={{ color: "#337ab7", display: 'inline' }} className='text-left'>Samsung </p>
                            <small style={{ color: "#337ab7" }}>({this.state.voteNumber} votes)</small>
                            <h6 className="mt-2"><small>PRICE</small></h6>
                            <h3>{numToRupiah(testPrice)}</h3>
                        </div>


                    </div>
                    <div className='row '>

                        <div className='col-12'>
                            <h2></h2>
                            <img className="card-img-top rounded mx-auto d-block img-custom2 mt-1" src={iphone} alt="Card image cap" />
                        </div>


                        <div className='col-12 test-text' >
                            <h3 className="ml-5 h3">More Detail</h3>

                            <ReactMarkdown
                                source={testMarkdown}
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

// const mapStateToProps = (state) => ({
//     vote: state.detailAdds.vote,

// })

// const mapDispatchToProps = (dispatch) => ({
//     loadAddsDetail: (page, limit) => dispatch(loadAddsDetail(id)),
//     resetAddsDetail: () => dispatch(resetAdds())

// })

// export default connect(
//     null,
//     mapDispatchToProps
// )(DetailAdds)