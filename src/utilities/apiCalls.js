import { userCleaner } from './helper';

export const fetchDeaths = async () => {
  try {
    const url = process.env.REACT_APP_DATABASE_API_URL + '/api/v1/deaths';
    const response = await fetch(url);
    const data = await response.json();
    await data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDateId = async day => {
  try {
    const underScoredDay = day.replace(/ /, '_');
    const url =
      process.env.REACT_APP_DATABASE_API_URL + `/api/v1/dates/${underScoredDay}`;
    const response = await fetch(url);
    const dateId = await response.json();
    return await dateId;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDateById = async dateId => {
  try {
    const url =
      process.env.REACT_APP_DATABASE_API_URL + `/api/v1/dates/${dateId}/id`;
    const response = await fetch(url);
    const day = await response.json();
    return await day;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDeathById = async deathId => {
  try {
    const url =
      process.env.REACT_APP_DATABASE_API_URL + `/api/v1/deaths/${deathId}`;
    const response = await fetch(url);
    const deadPerson = await response.json();
    return await deadPerson;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDeathByDate = async (dateId, year) => {
  try {
    const url =
      process.env.REACT_APP_DATABASE_API_URL + `/api/v1/deaths/${dateId}/${year}`;
    const response = await fetch(url);
    const dead = await response.json();
    return await dead;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = async () => {
  try {
    const url = process.env.REACT_APP_DATABASE_API_URL + `/api/v1/users/`;
    const response = await fetch(url);
    const users = await response.json();
    const unresolvedCleanUsers = await users.map(async user => {
      const cleanUser = await userCleaner(user);
      return cleanUser;
    });
    return await Promise.all(unresolvedCleanUsers);
  } catch (error) {
    console.log(error)
  }
};

export const postUsers = async (name, death, notes) => {
  try {
    const url = process.env.REACT_APP_DATABASE_API_URL + `/api/v1/users/`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        death_id: death[0].id,
        date_id: death[0].date_id,
        notes
      })
    });
    const user = await response.json();
    return await user;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async userId => {
  try {
    const url =
      process.env.REACT_APP_DATABASE_API_URL + `/api/v1/users/${userId}`;
    const response = await fetch(url, {
      method: 'DELETE'
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userId, notes) => {
  try {
    const url =
      process.env.REACT_APP_DATABASE_API_URL + `/api/v1/users/${userId}`;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        notes
      })
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
