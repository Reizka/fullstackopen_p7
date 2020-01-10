import blogService from '../services/blogService';
const reducer = (state = [], action) => {
  switch(action.type){
  case 'INIT_BLOGS':
    return action.data
  case 'NEW_BLOG':
    console.log(action.data);
    return state.concat(action.data)
  case 'GET_BLOGS':
    return state
  case 'LIKE_BLOG':
    return state.map(anec => {
      if(action.data.id===anec.id){
        return{ ...anec,votes:anec.votes+1 }
      }else{
        return anec;
      }
    });
  default:
    return state
  }

}

export const initBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll();
    console.log('axis',blogs)
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = (content) => {
  return async dispatch => {
    const newBlog = await blogService.create(content)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export const voteAnectdote = (id) => {
  console.log('voted for',id);
  return{
    type: 'LIKE_BLOG',
    data:{ id }
  }
}

export default reducer