export const fetchDeaths = async () => {
  const url = process.env.REACT_APP_DATABASE_API_URL + '/api/v1/deaths';
  const response = await fetch(url);
  const data = await response.json();
  await console.log(data);
  // edit
}