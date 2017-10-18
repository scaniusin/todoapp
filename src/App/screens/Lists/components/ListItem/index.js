import React, { PropTypes } from 'react'
import classNames from 'classnames'


const ListItem = ({ name, isLast, listId, selectedList, selectList }) => {
  const ListItemClass = classNames(
    'ph3 pv3 pointer bg-animate hover-bg-light-gray',
    {
      'bb b--light-silver': !isLast,
      'white bg-black': listId === selectedList
    }
  )

  const handleClick = () =>{
    selectList(listId);
  };


  return (
    <li className={ListItemClass} onClick={handleClick}>{name}</li>
  )
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isLast: PropTypes.bool
}

export default ListItem
