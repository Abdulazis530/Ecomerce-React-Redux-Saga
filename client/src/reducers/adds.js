const adds = (state = { totalPage: 0, data: [] }, action) => {
    switch (action.type) {
        case 'LOAD_ADDS_SUCCESS':
            const newData = action.adds
            console.log('actionsssred', newData)
            return {
                totalPage: action.adds.totalPage,
                data: [...state.data, ...action.adds.data]
            }
        case 'RESET_ADDS':
            return { totalPage: 0, data: [] }

        case 'ADD_NEW_ADDS_FAILURE':
        default:
            return state
    }
}

export default adds