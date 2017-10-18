import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import todos from './todos'
import lists from './lists'
import filters from './filters'
import selectedList from './selectedList'


export default combineReducers({
  lists,
  todos,
  filters,
  selectedList,
  form: formReducer
})
