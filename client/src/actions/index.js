


// start load chat data

export const loadAddsSuccess = (adds) => ({
    type: 'LOAD_ADDS_SUCCESS',
    adds
})
export const loadAddsFailure = () => ({
    type: 'LOAD_ADDS_FAILURE'
})

export const loadAdds = (page, limit) => ({
    type: 'LOAD_ADDS', page, limit
})

export const resetAdds=()=>({
    type:'RESET_ADDS'
})
// end load chat data

// start post chat data

export const postChatSuccess = (chats) => ({
    type: 'POST_CHAT_SUCCESS',
    chats
})


export const postChatFailure = (id) => ({
    type: 'POST_CHAT_FAILURE', id
})

export const addAddsFailure = () => ({
    type: 'ADD_NEW_ADDS_FAILURE'
})

export const postChatRedux = (id, name, message) => ({
    type: 'POST_CHAT', id, name, message
})


export const postChat = (name, message) => ({
    type: 'ADD_CHAT', name, message
})
export const postAdds = (newData, history) => ({
    type: 'ADD_NEW_ADDS', newData, history
})
// start delete chat data

export const deleteChatRedux = (id) => ({
    type: 'DELETE_CHAT', id
})

export const deleteChatSuccess = (chats) => ({
    type: 'DELETE_CHAT_SUCCESS',
    chats
})

export const deleteChatFailure = () => ({
    type: 'DELETE_CHAT_FAILURE'
})


export const deleteChat = (id) => ({
    type: 'REMOVE_CHAT', id
})


// end delete chat data

export const resendChatSuccess = (id) => ({
    type: 'RESEND_CHAT_SUCCESS', id
})

export const resendChat = (id, name, message) => ({
    type: 'RESEND_CHAT', id, name, message
})