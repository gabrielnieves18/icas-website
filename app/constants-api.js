/**
 * Created by gaby on 6/30/17.
 */

export const SEARCH_TYPES = {
  SPOTERS: 'spoters',
  SPOTS: 'spots',
  USERS: 'users',
};

export const API_GET_SPOTIN_URL = 'https://creativecaco.com/api/wadl';
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
