const API_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes'

export const getAllModels = async () => {
  const res = await fetch(`${API_URL}`);

  return res.json();
}