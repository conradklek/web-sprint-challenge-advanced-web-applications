// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Spinner from './Spinner'

test('renders spinner', () => {
  const { getByText } = render(<Spinner on />)
  expect(getByText('Please wait...')).toBeInTheDocument()
})