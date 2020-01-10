const initialState = {
  content: 'place holder'
}

const nRedux = (state = initialState, action) => {
  switch (action.type) {
  case 'NOTIFICATION':
    return {
      ...action, content: action.data.text
    }
  case 'CLEAR':
    return {
      ...action, notification: ''
    }
  default:
    return state
  }

}

export const clear = () => {
  return {
    type: 'CLEAR'
  }
}

export const message = (message, waitForSec) => {
  return async dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      data: {
        text: message
      }
    })
    setTimeout(
      () => {
        return(clear)
      },10*waitForSec
    )
  }

}


export default nRedux