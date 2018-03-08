import { ReducerAction } from '../models/reducerAction.model';
import { ActionType } from '../actions/action-type.enum';
import { PetOwner } from '../models/pet-owner.model';

const petOwnerReducer = (state: any[] = [], action: ReducerAction) => {
    switch (action.type) {
        case ActionType.PETOWNER_LOAD:
            return action.obj as PetOwner[];
        default:
            return state;
    }
};

export { petOwnerReducer as PetOwners };
