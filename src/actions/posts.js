import { ADD_POST } from '../actionTypes';

export function addPost(postContent){
  return{
    type: ADD_POST,
    postContent
  };
}

export function addPostToServer(postContent) {
  return(dispatch) => {
    fetch('http://localhost:8080/v1/posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postContent)
    })
    .then(res => res.json() )
    .then(data => {
      dispatch(addPost(data.postContent));
    });
  };
}
  
