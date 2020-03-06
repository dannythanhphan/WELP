import SessionReducer from './session_reducer'
import { combineReducers } from 'redux'
import EntityReducer from './entities_reducer';
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
    entities: EntityReducer,
    session: SessionReducer,
    ui: uiReducer
})

export default RootReducer;