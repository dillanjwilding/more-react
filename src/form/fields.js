import PropTypes from 'prop-types'
import React from 'react'

import { FormGroup } from './group.js'

export const Field = ({ children, ...props }) => {
  if (!children) {
    throw Error('')
  }
  // const type = props.type.name.toLowerCase()
  const type = (props.type ? props.type.toLowerCase() : 'text')
  const id = children.split(' ').join('_').toLowerCase()
  return (
    <FormGroup>
      <label htmlFor={id}>{children}</label>
      <input type={type} id={id} name={id} className='form-control' placeholder={children} {...props} />
    </FormGroup>
  )
}
Field.displayName = 'Field' // @todo: Clean this up
export const Submit = ({ className, ...props }) => {
  return <input type='submit' className={className || 'btn btn-sm btn-success'} {...props} /> // @todo: Combine className?
}
Submit.displayName = 'Submit' // @todo: Clean this up
Submit.propTypes = {
  className: PropTypes.string
}
export const Email = props => {
  return <Field type='email' {...props} />
}
Email.displayName = 'Email' // @todo: Clean this up
export const Password = props => {
  return <Field type='password' {...props} />
}
Password.displayName = 'Password' // @todo: Clean this up
export const Area = ({ children, ...props }) => {
  // const type = props.type
  const id = children.split(' ').join('_').toLowerCase()
  return (
    <FormGroup>
      <textarea id={id} name={id} className='form-control' {...props} />
    </FormGroup>
  )
}
Area.displayName = 'Area' // @todo: Clean this up
export const Dropdown = ({ children, ...props }) => {
  // @todo: Figure out id/name
  return (
    <FormGroup>
      <select className='form-control' {...props}>
        <Option id='default' value=''>Select {props.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</Option>
        {children}
      </select>
    </FormGroup>
  )
}
Dropdown.displayName = 'Dropdown' // @todo: Clean this up
export const Option = ({ children, ...props }) => {
  const id = props.id || children.split(' ').join('_').toLowerCase()
  return <option {...props} id={id} name={id}>{children}</option> // @todo: Figure out id/name and/or value(?)
}
Option.displayName = 'Option' // @todo: Clean this up
