const API_URL = process.env.REACT_APP_BACKEND_API_URL;

export async function getBands() {
    const response = await fetch(`${API_URL}/band`);
    return response.json();
}