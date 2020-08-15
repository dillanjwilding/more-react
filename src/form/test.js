/* global describe, test, expect */
// @todo: Separate tests by component
import React from 'react'
import { shallow } from 'enzyme'
// import ReactTestRenderer from 'react-test-renderer'

import { Form } from './form.js'
import { Field } from './fields.js'
import { FormGroup } from './group.js'
import { Step } from './step.js'

describe('Test forms', () => {
  test('render correctly', () => {
    expect(shallow(<Form />)).toMatchSnapshot()
    // const renderer = ReactTestRenderer.create(<Form />)
    // expect(renderer.toJSON()).toMatchSnapshot()
  })
})

describe('Test form fields', () => {
  /* test('no parameters', () => {
    expect(shallow(<Field />)).toThrow(() => { throw new Error('') })
  }) */
  test('render correctly', () => {
    expect(shallow(<Field>Test</Field>)).toMatchSnapshot()
  })
})

describe('Test form groups', () => {
  test('render correctly', () => {
    expect(shallow(<FormGroup />)).toMatchSnapshot()
  })
})

describe('Test form steps', () => {
  test('render correctly', () => {
    expect(shallow(<Step />)).toMatchSnapshot()
  })
})
