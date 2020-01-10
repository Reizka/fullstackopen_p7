import loginService from '../services/loginService'
import blogService from '../services/blogService'

const initialState = {
  name: '',
  username:'',
  token:''
}

const nRedux = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...action.data
    }
  case 'LOGOUT':
    return {
      ...action.data
    }
  default:
    return state
  }

}

export const logOut = () => {
  window.localStorage.removeItem('loggedBlogAppUser');
  return  {
    type: 'LOGOUT',
    data: {
      name:'',username:'', token:''
    }
  }
}


export const logIn = (username, password) => {
  return async dispatch => {
    const user = await loginService.login({
      username,
      password
    })
    window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
    blogService.setToken(user.token);

    dispatch({
      type: 'LOGIN',
      data: { ...user }
    })
  }

}

export default nRedux