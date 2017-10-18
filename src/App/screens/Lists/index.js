import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import * as actions from 'App/stores/resources/actions'
import { getEntities } from 'App/stores/resources'

import AddList from './components/AddList'
import List from './components/List'

const Lists = ({ lists, addList, selectList, selectedList }) => {

  return (
    <section className='fl w-20'>

      <AddList onSubmit={({list}, _, {reset}) => {
        addList(list)
        reset()
      }}/>

      <List {...{lists, selectList, selectedList}}/>
    </section>
  )
}

Lists.propTypes = {
  lists: PropTypes.array
}

export default connect(
  state => ({
    lists: getEntities('lists')(state),
    selectedList: state.selectedList.list
  }),
  dispatch => ({
    addList: (name) => dispatch(actions.submitEntity({ name }, {type: 'lists'})),
    selectList: (listId) => dispatch({type: 'CHANGE_SELECTED_LIST', payload: listId})
  })
)(Lists)
