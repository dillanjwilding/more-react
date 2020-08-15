import { Children, cloneElement } from 'react'

export const Draggable = ({ children }) => {
  const onDragStart = (e, component) => {
    e.dataTransfer.setData('text/plain', component)
  }
  return Children.map(children, (child, index) => {
    return cloneElement(child, {
      key: index, // not best practices
      draggable: true,
      onDragStart: e => onDragStart(e, child.props.name) // child.type.displayName
    })
  })
}
