import React, { PropTypes } from 'react'

import ListItem from '../ListItem'

const sortByDate = (arr) => arr.sort((a, b) => {
  return new Date(b.createdAt) - new Date(a.createdAt)
})

const List = ({ lists, selectedList, selectList }) => {
  const sortedLists = lists && lists[0] ? sortByDate(lists) : null

  return (
    <ul className='list pl0 ml0 center mw6 ba b--light-silver br2'>
      {sortedLists
        ? lists.map((list, i) =>
          <ListItem
            key={i}
            listId={list.id}
            {...list}
            selectedList = {selectedList}
            selectList={selectList}
            isLast={(lists.length - 1) === i}
          />
        )
        : <p className='ph3 pv3 tc'>No Lists found</p>
      }
    </ul>
  )
}

List.propTypes = {
  lists: PropTypes.array
}

export default List
