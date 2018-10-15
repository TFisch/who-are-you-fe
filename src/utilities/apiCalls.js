export const fetchDeaths = async () => {
  const url = 'http://who-were-you.herokuapp.com/api/v1/deaths';
  const response = await fetch(url);
  console.log(response);
}