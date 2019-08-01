import { FETCH_POSTS, NEW_POST } from './type'
import axios from 'axios'

export const fetchPosts = () => dispatch => {

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data)
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
        .catch(err => console.log(err))

}