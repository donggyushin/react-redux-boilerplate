import { FETCH_POSTS, NEW_POST } from '../actions/type'

const initialState = {
    posts: [],
    post: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}

