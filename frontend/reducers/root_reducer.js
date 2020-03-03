import SessionReducer from './session_reducer'
import { combineReducers } from 'redux'
import EntityReducer from './entities_reducer';

const RootReducer = combineReducers({
    entities: EntityReducer,
    session: SessionReducer
})

export default RootReducer;