import React, { PropTypes } from 'react'
import Lists from '../Lists';
import Todos from '../Todos';

const Main = () => {
  return (
    <div className='pa3 pa5-ns'>
      <Lists/>
      <Todos/>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
