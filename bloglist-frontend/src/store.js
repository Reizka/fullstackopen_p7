import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationRedux from './redux/notificationRedux'
import blogRedux from './redux/blogRedux'
import userRedux from './redux/userRedux'

const reducer = combineReducers({
  notification: notificationRedux,
  blogs:blogRedux,
  user:userRedux
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk))
)

export default store