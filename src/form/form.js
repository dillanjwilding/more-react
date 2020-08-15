import React, { Children, cloneElement, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// @todo: Track down extra renders and remove them
// @todo: Add layout and formatting
// @todo: Add loading from JSON
// @todo: Add validation
// @todo: I shouldn't need to rely on displayName. There should be another way to reflexively get a component's name
// @todo: Export default Form
export const Form = ({ children, onChange, onSubmit, preventDefault = true, ...props }) => {
  // const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(0)
  const [values, setValues] = useState({})
  useEffect(() => {
    // setLoading(false)
  }, [])
  const handleSubmit = event => {
    if (preventDefault) event.preventDefault()
    if (onSubmit) onSubmit(values)
    console.log('submitted')
  }
  /* Children.map(children, (child, index) => {
    console.log(child.name)
  }) */
  const steps = Children.toArray(children).filter(child => child.type.displayName === 'Step').length
  return (
    <form {...props} onSubmit={handleSubmit}>
      {Children.map(children, (child, index) => {
        let childProps = {
          key: index, // not the best practice
          onChange: event => {
            event.persist()
            if (onChange) onChange()
            setValues(values => ({ ...values, [event.target.name]: event.target.value }))
            console.log(values)
          }
        }
        if (child.type.displayName === 'Step') {
          childProps = {
            ...childProps,
            hidden: index !== step,
            step,
            steps,
            setStep
          }
        }
        return cloneElement(child, childProps)
        /* let type = child.props.type
          if (child.props.type && typeof child.props.type !== 'string') {
            child.props.type.name.toLowerCase()
          }
          const id = child.props.children.split(' ').join('_').toLowerCase()
          if (['select', 'textarea'].includes(type)) {
            return <type id={id} name={id} />
          } else {
            return <input type={type} id={id} name={id} />
          } */
      })}
    </form>)
}
Form.displayName = 'Form' // @todo: Clean this up
Form.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  preventDefault: PropTypes.bool
}
