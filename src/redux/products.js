// actions
const LOAD_PRODUCTS = 'developer-portal/products/LOAD_PRODUCTS';

// action creators
export function loadProducts () {
  return ({
    type: LOAD_PRODUCTS
  });
}

// reducers 
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }

}

// side effects / sagas
// tbd
