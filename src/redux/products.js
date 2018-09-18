import { takeEvery, put } from 'redux-saga/effects'

// actions
const LOAD_PRODUCTS = 'developer-portal/products/LOAD_PRODUCTS';
const LOAD_PRODUCTS_SUCCEEDED = 'developer-portal/products/LOAD_PRODUCTS_SUCCEEDED';

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
    case LOAD_PRODUCTS_SUCCEEDED: return {...state, products: action.products};
    default: return state;
  }

}

// side effects / sagas
// saga watcher
export function* watchLoadProducts(params) {
  yield takeEvery(LOAD_PRODUCTS, handleLoadProducts())
}

// saga workers
export function* handleLoadProducts() {
  const mock = [
    {
      name: 'Product Info',
      type: 'services',
      description: "babba bla bla bla",
      links: {
        landing: "http://api.d10l.de",
        production: "",
        sandbox: "",
        documentation: ""
      }
    },
    {
      name: 'Identity Access Management',
      type: 'platform',
      description: "babba bla bla bla",
      links: {
        landing: "http://api.d10l.de",
        production: "",
        sandbox: "",
        documentation: ""
      }
    },
    {
      name: 'API Runtime',
      type: 'platform',
      description: "babba bla bla bla",
      links: {
        landing: "http://api.d10l.de",
        production: "",
        sandbox: "",
        documentation: ""
      }
    },
    {
      name: 'API Management',
      type: 'platform',
      description: "babba bla bla bla",
      links: {
        landing: "http://api.d10l.de",
        production: "",
        sandbox: "",
        documentation: ""
      }
    },
    {
      name: 'AI Development',
      type: 'platform',
      description: "babba bla bla bla",
      links: {
        landing: "http://api.d10l.de",
        production: "",
        sandbox: "",
        documentation: ""
      }
    },
    {
      name: 'Risk Asessment',
      type: 'services',
      description: "babba bla bla bla",
      links: {
        landing: "http://api.d10l.de",
        production: "",
        sandbox: "",
        documentation: ""
      }
    },
    {
      name: 'Adress Check',
      type: 'services',
      description: "babba bla bla bla",
      links: {
        landing: "http://api.d10l.de",
        production: "",
        sandbox: "",
        documentation: ""
      }
    },
    {
      name: 'Investment',
      type: 'services',
      description: "babba bla bla bla",
      links: {
        landing: "http://api.d10l.de",
        production: "",
        sandbox: "",
        documentation: ""
      }
    }
  ]

  yield put({ type: LOAD_PRODUCTS_SUCCEEDED, products: mock })
}