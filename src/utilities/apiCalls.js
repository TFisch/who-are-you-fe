export const fetchDeaths = async () => {
  const url = process.env.REACT_APP_DATABASE_API_URL + '/api/v1/deaths';
  const response = await fetch(url);
  const data = await response.json();
  // await console.log(data);
  // edit
};

export const fetchDateId = async (day, year) => {
  const underScoredDay = day.replace(/ /, '_');
  const url =
    process.env.REACT_APP_DATABASE_API_URL + `/api/v1/dates/${underScoredDay}`;
  const response = await fetch(url);
  const dateId = await response.json();
  await fetchDeathByDate(dateId, year);
};

export const fetchDeathByDate = async (dateId, year) => {
  const url =
    process.env.REACT_APP_DATABASE_API_URL + `/api/v1/deaths/${dateId}/${year}`;
  const response = await fetch(url);
  const dead = await response.json();
  console.log(dead);
};

export const fetchUsers = async () => {
  const url = process.env.REACT_APP_DATABASE_API_URL + `/api/v1/users/`;
  const response = await fetch(url);
  const users = await response.json();
  console.log(users);
};
