// import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const Droppable = ({ components }) => {
  const [values, setValues] = useState({ loading: true, items: [] }) // items = inputs
  useEffect(() => {
    setValues(state => ({ ...state, loading: false }))
  }, [])
  /* useEffect(() => {
    console.log(values.items)
  }, [values]) */
  const onDragOver = e => {
    e.preventDefault() // ?
  }
  // @todo: onDragOut or equivalent
  const onDrop = e => {
    const element = e.dataTransfer.getData('text')
    setValues(state => ({ ...state, items: [...values.items, element] }))
  }
  // @todo: This seems overly implemented for my forms; make more abstract
  return (
    <div onDragOver={onDragOver} onDrop={onDrop} className='col'>
      {values.items.map((name, i) => {
        const Component = components[name]
        // @todo: Figure out the UI/UX for getting the name of this component
        // The easiest would be to have a dialog before adding and rendering it
        if (Component.displayName === 'Submit') { // @todo: Fix this
          return <Component />
        }
        return <Component key={name + '-' + i}>Test</Component>
        // console.log(item)
        // return <div>{item}</div>
      })}
    </div>)
}
Droppable.propTypes = {
  components: PropTypes.object
}
