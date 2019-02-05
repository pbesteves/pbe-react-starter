import React from 'react'
import { shallow, configure } from 'enzyme'
import App from './App'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Tests if the App components renders without crashing', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})
