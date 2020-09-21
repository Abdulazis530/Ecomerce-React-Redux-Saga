const adds = (state = { totalPage: 0, data: [] }, action) => {
    switch (action.type) {
        case 'LOAD_ADDS_SUCCESS':
            return {
                totalPage: action.adds.totalPage,
                data: [...state.data, ...action.adds.data]
            }
        case 'RESET_ADDS':
            return { totalPage: 0, data: [] }

        default:
            return state
    }
}

export default adds