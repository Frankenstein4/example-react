import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './v'
 
export default combineReducers({
  todos,
  visibilityFilter
})