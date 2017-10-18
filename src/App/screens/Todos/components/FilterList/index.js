import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const FilterList = ({ changeFilter , filter }) => {

  const handleClick = (event) =>{
    const idEvent = event.target.id;
    changeFilter(idEvent);
  };

  const buttonActive = "f6 link dim br1 ba ph3 pv2 mb2 dib white bg-black mr3 pointer"
  const buttonNotActive = "f6 link dim br1 ba ph3 pv2 mb2 dib black mr3 pointer"

  return (
    <div className='mb1 mt3' >
      <fieldset className='cf bn ma0 pa0'>
        <legend className='pa0 f5 f4-ns mb3 black-80'>Filter todos</legend>
        <div className='cf'>
          <Link className={filter === 'all' ? buttonActive : buttonNotActive}
                 id='all' onClick={handleClick}
          >
            All
          </Link>
          <Link className={filter === 'active' ? buttonActive : buttonNotActive}
                 id='active' onClick={handleClick}
          >
            Active
          </Link>
          <Link className={filter === 'completed' ? buttonActive : buttonNotActive}
                 id='completed' onClick={handleClick}
          >
            Completed
          </Link>
        </div>
      </fieldset>
    </div>
  )


}

FilterList.propTypes = {
  className: PropTypes.string
}

export default FilterList;
