import { ReducerAction } from '../../models/reducerAction.model';
import { PetOwnerService } from '../../services/pet-owner/pet-owner.service';
import { Injectable } from '@angular/core';
import { PetOwner } from '../../models/pet-owner.model';
import { ActionType } from '../action-type.enum';

@Injectable()
export class PetOwnerActions {
    constructor(private _petOwnerService: PetOwnerService) {}

    public gotPetOwners(petOwners: PetOwner[]) {
        return {
            type: ActionType.PETOWNER_LOAD,
            obj: petOwners
        } as ReducerAction;
    }

    public getPetOwners() {
        return dispatch => {
            return this._petOwnerService
                .getPetOwner()
                .subscribe((petOwners: PetOwner[]) =>
                    dispatch(this.gotPetOwners(petOwners))
                );
        };
    }
}
