// actions
const LOGIN = 'developer-portal/users/LOGIN';
const LOGOUT = 'developer-portal/users/LOGOUT';
const CHECK_LOGIN = 'developer-portal/users/CHECK_LOGIN';

// action creators
export function login() {
  return { type: LOGIN };
}

export function logout() {
  return { type: LOGOUT };
}

export function checkLogin() {
  return { type: CHECK_LOGIN };
}


// reducer -> only hand state change events / actions
export default function reducer(state = {}, action = {}) {

  switch (action.type) {
    // do reducer stuff
    default: return state;
  }

}

// side effects -> handle events that do something and dispatch a state event
// tbd redux saga