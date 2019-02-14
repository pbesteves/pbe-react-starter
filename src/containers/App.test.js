import React from 'react'
import App from './App'
import { render, cleanup } from 'react-testing-library'

describe('Tests if the App components renders without crashing', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const { getByText } = render(<App />)

    expect(getByText('Hello Dev!!')).toBeInTheDocument()
  })
})
