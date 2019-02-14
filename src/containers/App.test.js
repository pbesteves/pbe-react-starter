import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('Tests if the App components renders without crashing', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})
