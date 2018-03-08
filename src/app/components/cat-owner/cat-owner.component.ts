import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Pet } from './../../models/pet.model';
import { PetGroup } from '../../models/pet-group.model';
import { PetOwnerActions } from '../../actions/pet-owner/pet-owner-actions';
import { PetOwner } from '../../models/pet-owner.model';

@Component({
    selector: 'app-cat-owner',
    templateUrl: './cat-owner.component.html',
    styleUrls: ['./cat-owner.component.css']
})
export class CatOwnerComponent implements OnInit {
    @select() petOwners: PetOwner[];

    constructor(
        private ngRedux: NgRedux<any>,
        private _petOwnerActions: PetOwnerActions
    ) {}

    ngOnInit() {
        this.ngRedux.dispatch<any>(this._petOwnerActions.getPetOwners());
    }

    getCatsByOwnerGender(): PetGroup[] {
        const _groupKey = 'gender';
        const _petType = 'Cat';
        const _result: PetGroup[] = [];
        _result.push({
            groupId: 1,
            groupName: 'Male',
            pets: [{ type: 'Cat', name: 'Pussy' } as Pet]
        } as PetGroup);
        return _result;
    }
}
