import numToRupiah from '../helpers/rupiah'

const detailAdds = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_DETAIL_ADDS_SUCCESS':
            console.log('reducer')
            console.log(action.data)
            const data = action.data
            return {
                ...data,
                price:numToRupiah(data.price)
            }
        case 'RESET_DETAIL_ADDS':
            return {}
        case 'UPVOTE_ADDS':
            return {
                ...state,
                vote: state.vote + 1
            }
        case 'DEVOTE_ADDS':
            return {
                ...state,
                vote: state.vote - 1
            }
        default:
            return state
    }
}

export default detailAdds