const API_URL = process.env.REACT_APP_BACKEND_API_URL

export async function getBands() {
  const response = await fetch(`${API_URL}/band`)
  return response.json()
}

export async function getBand(id) {
  const response = await fetch(`${API_URL}/band/${id}`)
  return response.json()
}

export async function deleteBand(id) {
  await fetch(`${API_URL}/band/${id}`, { method: 'DELETE' })
}

export async function createBand(band) {
  const response = await fetch(`${API_URL}/band`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(band),
  })
  return response.json()
}

export async function updateBand(id, band) {
  const response = await fetch(`${API_URL}/band/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(band),
  })
  return response.json()
}

export async function uploadFile(file) {
  const formData = new FormData()
  formData.append('file', file)
  const response = await fetch(`${API_URL}/import`, {
    method: 'POST',
    body: formData,
  })
  return response.json()
}
