import { COUNT } from '../actionTypes'

const initialState = {
  count: 1
}

const count = (state = initialState.count, action) => {
  switch (action.type) {
    case COUNT.UP:
      return state + 1;
    default:
      return state;
  }
}

export default count

