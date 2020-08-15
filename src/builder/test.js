/* global describe, test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import { Builder } from './builder.js'

describe('Test builder', () => {
  test('renders correctly', () => {
    expect(shallow(<Builder />)).toMatchSnapshot()
  })
})

describe('Test [builder parts]', () => {

})
