/**
 * Created by gaby on 6/30/17.
 */

export const SEARCH_TYPES = {
  SPOTERS: 'spoters',
  SPOTS: 'spots',
  USERS: 'users',
};

export const AUTH_TOKEN = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3BvdGluIiwibGFzdF9uYW1lIjoiRGVtb1VzZXIiLCJlbWFpbCI6ImdhYnJpZWwuc3BvdGluQGdtYWlsLmNvbSIsImZhY2Vib29rX2lkIjoiMTAxNjYwMzQ3MDYwNzg1IiwidXNlcl9pZCI6IjU4ZjI5MjViMmI5NWI4MDAyMTllOGRiYiIsImlhdCI6MTQ5NTIyODYzNCwiZXhwIjoxNTI2NzY0NjM0LCJhdWQiOiJhZHZlbnR1cmUgdHJhdmVsZXIiLCJpc3MiOiJzcG90aW4gc2VydmVyIiwic3ViIjoiZ2FicmllbC5zcG90aW5AZ21haWwuY29tIiwianRpIjoiY2VhNjMwNjYtZGJlOC00MDBjLWJmZGYtYjk3M2MwMzViYWQ4In0.CXz5pNIgtChiKxsK7E7gnXkzsKiYLZcPrCiuPodHFgk';

export const API_GET_SPOTIN_URL = 'https://spotinapp.com/api';
export const API_GET_SPOTS_BASE = `${API_GET_SPOTIN_URL}/${SEARCH_TYPES.SPOTS}`;
export const API_GET_USERS_BASE = `${API_GET_SPOTIN_URL}/${SEARCH_TYPES.USERS}`;
export const API_GET_SPOTERS_BASE = `${API_GET_USERS_BASE}?spoter=true`;

export function API_GET_USER_BY_ID(id) {
  return (`${API_GET_USERS_BASE}?_id=${id}`);
}

export function API_GET_USER_LOGIN(email, password) {
  return (`${API_GET_USERS_BASE}?email=${email}&password=${password}`);
}

export function API_SEARCH_SPOTS(computeThumbnail = false) {
  return (`${API_GET_SPOTS_BASE}/search?computeThimbnail=${computeThumbnail}`);
}

export function API_SEARCH_USERS(computeThumbnail = false) {
  return (`${API_GET_USERS_BASE}/search?computeThimbnail=${computeThumbnail}`);
}

export function API_SEARCH_SPOTS_PAGINATE(computeThumbnail = false, skip = 0, limit = 20, fields = '_id,name,description,images,location.location') {
  return (`${API_SEARCH_SPOTS(computeThumbnail)}&fields=${fields}&skip=${skip}&limit=${limit}`);
}

export function API_SEARCH_USERS_PAGINATE(computeThumbnail = false, skip = 0, limit = 20, fields = '_id,name,description,images,location.location') {
  return (`${API_SEARCH_USERS(computeThumbnail)}&fields=${fields}&skip=${skip}&limit=${limit}`);
}
