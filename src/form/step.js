import React, { Children, cloneElement } from 'react'

import { Submit } from './fields.js'

// @todo: Track down extra renders and remove them
export const Step = ({ hidden, children, onChange, step, steps, setStep, ...props }) => {
  const previous = e => {
    e.preventDefault()
    setStep(step - 1)
  }
  const next = e => {
    e.preventDefault()
    setStep(step + 1)
  }
  // Is hidden unnecessary because all steps != this step should be hidden.
  return (
    <div hidden={hidden}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          key: index, // not the best practice
          onChange
        })
      })}
      {(typeof step !== 'undefined' && step !== null) && (
        <>
          <PreviousButton previous={previous} step={step} />
          <NextButton next={next} step={step} steps={steps} />
          <SubmitButton step={step} steps={steps} />
        </>
      )}
    </div>)
}
Step.displayName = 'Step' // @todo: Clean this up

// @todo: Rewrite these
const PreviousButton = ({ previous, step }) => {
  if (typeof step !== 'undefined' && step !== null) {
    if (step !== 0) {
      return <button className='btn btn-sm btn-primary' onClick={previous}>Previous</button>
    }
  }
  return null
}

const NextButton = ({ next, step, steps }) => {
  if (typeof step !== 'undefined' && step !== null) {
    if (step < steps - 1) {
      return <button className='btn btn-sm btn-primary' onClick={next}>Next</button>
    }
  }
  return null
}

const SubmitButton = ({ step, steps }) => {
  if (typeof step !== 'undefined' && step !== null) {
    if (step === steps - 1) {
      return <Submit />
    }
  }
  return null
}

// const renderButtons = step => typeof step !== 'undefined' && step !== null

/* const NavigationButton = ({ action, Component, condition, step }) => {
  if (typeof step !== 'undefined' && step !== null) {
    if (condition) {
      return <Component onClick={action} />
    }
  }
} */
