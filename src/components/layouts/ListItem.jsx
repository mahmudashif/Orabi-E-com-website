import React from 'react'

const ListItem = ({item, className}) => {
  return (
    <li className= {className}>
      {item}
    </li>
  )
}

export default ListItem
