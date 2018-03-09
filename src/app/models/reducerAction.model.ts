import { Action } from 'redux';
import { ActionType } from '../actions/action-type.enum';

export interface ReducerAction extends Action {
    type: ActionType;
    obj: any;
}
