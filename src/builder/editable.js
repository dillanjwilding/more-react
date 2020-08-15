import React, { Children, cloneElement, useState } from 'react'

export const Editable = ({ editing: edit = false, children, ...props }) => {
  const [editing, setEditing] = useState(edit)
  const [value, setValue] = useState('')
  return editing ? (
    <>
      <input onChange={e => setValue(e.target.value)} />
      <button onClick={() => setEditing(false)} />
    </>
  ) : (
    Children.map(children, (child, index) => {
      return cloneElement(child, {
        key: index, // not the best practice
        value
      })
    })
  )
}
