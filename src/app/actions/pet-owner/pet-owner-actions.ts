import { ReducerAction } from '../../models/reducerAction.model';
import { IPetOwner } from '../../services/pet-owner/ipet-owner';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { PetOwner } from '../../models/pet-owner.model';
import { ActionType } from '../action-type.enum';

@Injectable()
export class PetOwnerActions {
    constructor(private _petOwner: IPetOwner) {}

    private gotPetOwners(petOwners: PetOwner[]): ReducerAction {
        // console.log(JSON.stringify(petOwners));
        return {
            type: ActionType.PETOWNER_LOAD,
            payload: petOwners
        } as ReducerAction;
    }

    public getPetOwners() {
        return dispatch => {
            return this._petOwner
                .getPetOwner()
                .map(data => data as PetOwner[])
                .subscribe((petOwners: PetOwner[]) => {
                    // console.log('actionData: ' + JSON.stringify(petOwners));
                    return dispatch(this.gotPetOwners(petOwners));
                });
        };
    }
}
