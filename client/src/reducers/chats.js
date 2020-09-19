const adds = (state = {totalPages:0,data:[]}, action) => {
    switch (action.type) {
        case 'LOAD_ADDS_SUCCESS':
            return action.adds
        case 'POST_CHAT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    message: action.message,
                    sent: true
                }
            ]
        case 'DELETE_CHAT':
            return state.filter((item) => item.id !== action.id)

        case 'DELETE_CHAT_SUCCESS':
            return state

        case 'LOAD_CHAT_FAILURE':
        case 'DELETE_CHAT_FAILURE':
        case 'ADD_NEW_ADDS_FAILURE':
        default:
            return state
    }
}

export default adds