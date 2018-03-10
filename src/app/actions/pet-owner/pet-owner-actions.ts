import { ReducerAction } from '../../models/reducerAction.model';
import { IPetOwner } from '../../services/pet-owner/ipet-owner';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { PetOwner } from '../../models/pet-owner.model';
import { ActionType } from '../action-type.enum';

@Injectable()
export class PetOwnerActions {
    constructor(private _petOwner: IPetOwner) {}

    public gotPetOwners(petOwners: PetOwner[]) {
        // console.log(JSON.stringify(petOwners));
        return {
            type: ActionType.PETOWNER_LOAD,
            obj: petOwners
        } as ReducerAction;
        // return { type: ActionType.PETOWNER_LOAD, petOwners };
    }

    public getPetOwners() {
        return dispatch => {
            return this._petOwner
                .getPetOwner()
                .map(data => data as PetOwner[])
                .subscribe((petOwners: PetOwner[]) =>
                    dispatch(this.gotPetOwners(petOwners))
                );
        };
    }
}
