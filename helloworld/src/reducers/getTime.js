import { GET_TIME } from '../actionTypes'

const initialState = {
  time: Date()
}

const time = (state = initialState.time, action) => {
  switch (action.type) {
    case GET_TIME:
      return Date();
    default:
      return state;
  }
}

export default time

