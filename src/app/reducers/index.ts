import { combineReducers } from 'redux';
import { petOwners } from './pet-owner.reducer';

const rootReducer = combineReducers({
    petOwners
});

export default rootReducer;
