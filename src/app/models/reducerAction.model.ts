import { ActionType } from '../actions/action-type.enum';

export interface ReducerAction {
    type: ActionType;
    obj: any;
}
