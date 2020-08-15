import React from 'react' // npm link ../node_modules/react
import { render } from 'react-dom'
import { Form, Step, Field, Password, Area, Dropdown, Option, Submit, Builder } from 'react-forms' // This requires link
// import { Form } from '../../lib/index.js'
// import Form from 'react-forms' // This requires link
// import Form from '../../lib/index.js'

const App = () => (
  <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Form>
            <Field>First Name</Field>
            <Password>Last Name</Password>
            <Area>Another Test</Area>
            <Dropdown name='count'>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
            </Dropdown>
            <Submit />
          </Form>

          <Form>
            <Step>
              <Field>Step One</Field>
            </Step>
            <Step>
              <Field>Step Two</Field>
            </Step>
          </Form>
        </div>
      </div>
    </div>
    <Builder>
      <Field />
      <Submit />
    </Builder>
  </>)
render(<App />, document.getElementById('root'))
