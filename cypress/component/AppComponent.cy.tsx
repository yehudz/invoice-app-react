import { mount } from 'cypress/react'
import * as React from 'react'
import App from '../../src/App'

it('App component mounted', ()=> {
  mount(<App />)
})