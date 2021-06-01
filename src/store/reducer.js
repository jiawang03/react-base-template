import { ADD_ITEM, DEL_ITEM, GET_INFO } from './actionTypes'

let defaultStore = {
  list: [1, 2, 3],
  info: null
}

const switchActions = (state = defaultStore, action) => {
  let _newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ADD_ITEM:
      _newState.list.push(action.value)
      return _newState
    case DEL_ITEM:
      _newState.list.splice(action.value, 1)
      return _newState
    case GET_INFO:
      _newState.info = action.data
      return _newState
    default:
      return _newState
  }
}

export default switchActions
