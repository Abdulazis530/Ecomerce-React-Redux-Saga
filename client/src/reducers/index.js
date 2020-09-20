import { combineReducers } from 'redux'
import adds from './adds'
import detailAdds from './detailAdds'

export default combineReducers({
  adds,
  detailAdds
})