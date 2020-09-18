const chats = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CHAT_SUCCESS':
            return action.chats.map((item) => {
                item.sent = true;
                return item
            })

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

export default chats