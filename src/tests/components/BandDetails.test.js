import { render, screen } from '@testing-library/react'
import expect from 'expect'
import BandDetails from './../../components/BandDetails'
import { getBand } from '../../api'

jest.mock('../../api', () => ({
  getBand: jest.fn(),
}))
jest.setTimeout(50000)

test('renders the band details', async () => {
  getBand.mockResolvedValue({
    id: 1,
    name: 'Pink Floyd',
    origin: 'Royaume-Uni',
    city: 'Londres',
    members: 3,
    musicalCurrent: 'Rock',
    startYear: 1965,
    separationYear: 1995,
    presentation: 'Groupe de rock progressif et psychédélique',
  })

  render(<BandDetails band={await getBand(1)} onSelect={() => {}} />)

  expect(screen.getByText(/band details/i)).toBeInTheDocument()
  expect(screen.getByText('Name: Pink Floyd')).toBeInTheDocument()
  expect(screen.getByText('Origin: Royaume-Uni')).toBeInTheDocument()
  expect(screen.getByText('City: Londres')).toBeInTheDocument()
  expect(screen.getByText('Members: 3')).toBeInTheDocument()
  expect(screen.getByText('Musical current: Rock')).toBeInTheDocument()
  expect(screen.getByText('Start year: 1965')).toBeInTheDocument()
  expect(screen.getByText('Separation year: 1995')).toBeInTheDocument()
  expect(
    screen.getByText('Presentation: Groupe de rock progressif et psychédélique')
  ).toBeInTheDocument()
})
