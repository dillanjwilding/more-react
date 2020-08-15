import React, { useEffect } from 'react' // import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

import * as fields from '../form/fields.js'
import { Droppable } from './droppable.js'
import { Legend } from './legend.js'

// @todo: Save to and load from JSON
// @todo: Add layout and formatting
/**
 * Take an object of displayed name => JSX and create a Legend containing display names
 * with the property/UX that can drag onto the Form but when dropped it adds the
 * corresponding JSX to the form.
 *
 * Or preferably/alternatively use the name or displayName of the component for the label.
 */
export const Builder = ({ children, render, autoSave = false }) => {
  // Does Builder need to know state so that it can save and load it?
  // const [values, setValues] = useState({ loading: true, items: [] }) // items = inputs
  const load = () => {}
  // const save = () => {}
  useEffect(() => {
    if (load) {
      load() // how to load into values?
    }
  }, [])
  /* useEffect(() => {
    if (autoSave) {

    }
  }, [values]) */
  const add = () => {

  }
  const remove = () => {

  }
  if (render) {
    return render({
      form: <Droppable components={fields} add={add} remove={remove} />,
      legend: <Legend>{children}</Legend>
    })
  } else {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Droppable components={fields} add={add} remove={remove} className='h-100' />
          <div className='col-2 h-100'>
            <Legend>{children}</Legend>
          </div>
        </div>
      </div>)
  }
}
Builder.propTypes = {
  render: PropTypes.func,
  autoSave: PropTypes.func
}
