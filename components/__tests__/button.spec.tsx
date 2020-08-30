import { fireEvent, render, screen } from '@testing-library/react'

import Button from '../button'

afterEach(jest.clearAllMocks)

const handleClick = jest.fn()

it('displays label', () => {
  render(<Button label="Hello World" onClick={handleClick} />)

  screen.getByText('Hello World')
})

it('listens to onClick', () => {
  render(<Button label="Hello World" onClick={handleClick} />)

  const button = screen.getByText('Hello World')

  fireEvent.click(button)

  expect(handleClick).toBeCalledTimes(1)

  fireEvent.click(button)

  expect(handleClick).toBeCalledTimes(2)
})
