import React from 'react'

export const FormGroup = ({ children, ...props }) => {
  // @todo: Use fieldset and/or form-label-group for floating labels?
  return (
    <div className='form-group'>{children}</div>
  )
}
FormGroup.displayName = 'FormGroup' // @todo: Clean this up
