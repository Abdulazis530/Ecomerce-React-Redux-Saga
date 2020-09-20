
// start load adds data
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

export const resetAdds = () => ({
    type: 'RESET_ADDS'
})
// end load adds data


// start post adds data
export const addAddsFailure = () => ({
    type: 'ADD_NEW_ADDS_FAILURE'
})
export const postAdds = (newData, history) => ({
    type: 'ADD_NEW_ADDS', newData, history
})
//end post adds data


//start load detail adds
export const loadDetailAdds = (id) => ({
    type: 'LOAD_DETAIL_ADDS',
    id
})

export const loadDetailAddsSuccess = (data) => ({
    type: 'LOAD_DETAIL_ADDS_SUCCESS',
    data
})

export const resetDetailAdds = () =>({
    type:'RESET_DETAIL_ADDS'
})
//end load detail adds



// UPVOTE AND DEVOTE

export const upvote = () => ({
    type: 'UPVOTE_ADDS',
})

export const devote = () => ({
    type: 'DEVOTE_ADDS',
})
export const updateVote = (id,vote,history) => ({
    type: 'UPDATE_VOTE',
    id,
    vote,
    history
})