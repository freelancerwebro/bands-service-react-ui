import { getBands, updateBand } from '../../api'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import expect from 'expect'
import BandList from '../../components/BandList'
import BandForm from '../../components/BandForm'
import React from 'react'

jest.mock('../../api', () => ({
  getBands: jest.fn(),
  updateBand: jest.fn(),
}))
jest.setTimeout(50000)

test('updates an existing band', async () => {
  const existingBand = {
    id: 1,
    name: 'The Beatles',
    origin: 'UK',
    city: 'Liverpool',
    startYear: 1988,
  }
  getBands.mockResolvedValue([existingBand])
  updateBand.mockResolvedValue({
    ...existingBand,
    name: 'The Beatles (Updated)',
  })

  const mockOnSelect = jest.fn()
  const mockOnEdit = jest.fn()
  const mockOnSave = jest.fn()

  render(<BandForm band={existingBand} onSave={mockOnSave} />)
  render(
    <BandList
      bands={[existingBand]}
      onSelect={mockOnSelect}
      onEdit={mockOnEdit}
    />
  )

  fireEvent.click(screen.getByText('Edit'))

  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: 'The Beatles (Updated)' },
  })

  fireEvent.click(screen.getByText('Update Band'))

  await waitFor(() => {
    expect(updateBand).toHaveBeenCalledTimes(1)
  })
})
