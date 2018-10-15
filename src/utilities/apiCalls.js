export const fetchDeaths = async () => {
  const url = process.env.REACT_APP_DATABASE_API_URL + "/";
  const response = await fetch(url);
  console.log(response);
}