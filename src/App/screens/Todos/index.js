import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import * as actions from 'App/stores/resources/actions'
import { getEntities } from 'App/stores/resources'
import { getFiltered } from 'App/stores/utils/getFiltered'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'



const Todos = ({ todos, addTodo, listID, toggleTodo, filter, changeFilter }) => {


  return (
    <section className='fl w-50'>

      <AddTodo onSubmit={({todo}, _, {reset}) => {
        addTodo(todo, listID)
        reset() }}
        listID = {listID}
        filter={filter}
        changeFilter={changeFilter}/>

      <h1 className='f4 bold center mw6'>All Todos</h1>

      <TodoList {...{ todos, toggleTodo }} />

    </section>
  )
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default connect(
  state => ({
    listID: state.selectedList.list,
    filter: state.filters.filter,
    todos: getFiltered(getEntities('todos')(state), state.filters.filter, state.selectedList.list),
  }),
  dispatch => ({
    addTodo: (text, listID) => dispatch(actions.submitEntity({ text, listID }, {type: 'todos'})),
    toggleTodo: (todo, completed) => dispatch(actions.updateEntity({ ...todo, completed }, {type: 'todos'})),
    changeFilter: (filter) => dispatch({type: 'CHANGE_FILTER', payload: filter}),
  })
)(Todos)
