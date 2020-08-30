import { render } from '@testing-library/react'

import Rating from '../rating'

it('displays 5 star icons if no max value provided', () => {
  const { container } = render(<Rating score={4} />)

  const icons = container.querySelectorAll('svg')
  expect(icons).toHaveLength(5)
})

it('displays {max} star icons', () => {
  const { container } = render(<Rating score={4} max={8} />)

  const icons = container.querySelectorAll('svg')
  expect(icons).toHaveLength(8)
})
