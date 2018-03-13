import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Pet } from '../../models/pet.model';
import { PetGroup } from '../../models/pet-group.model';
import { PetOwnerActions } from '../../actions/pet-owner/pet-owner-actions';
import { PetOwner } from '../../models/pet-owner.model';

@Component({
    selector: 'app-cat-owner',
    templateUrl: './cat-owner.component.html',
    styleUrls: ['./cat-owner.component.css']
})
export class CatOwnerComponent implements OnInit {
    // @select() petOwners$: any;
    @select() readonly petOwners: Observable<PetOwner[]>;
    // public catsByOwnerGender: PetGroup[]; // = this.ngRedux.select(petOwners => this.getCatsByOwnerGender());
    // public readonly catsByOwnerGenderStr: string = JSON.stringify(
    //     this.catsByOwnerGender
    // );

    constructor(
        private ngRedux: NgRedux<any>,
        private _petOwnerActions: PetOwnerActions
    ) {}

    ngOnInit() {
        this.ngRedux.dispatch<any>(this._petOwnerActions.getPetOwners());
        this.petOwners.subscribe(petOwners => {
            console.log('componentData: ' + JSON.stringify(petOwners));
            // this.catsByOwnerGender = this.getCatsByOwnerGender(petOwners);
        });
        // this.petOwners$.subscribe(
        //     petOwners => console.log(JSON.stringify(this.petOwners$))
        //     // this.catsByOwnerGender = this.getCatsByOwnerGender()
        // );
        // console.log(JSON.stringify(this.petOwners$));
    }

    private getCatsByOwnerGender(petOwners: PetOwner[]): PetGroup[] {
        let _result: PetGroup[];
        if (petOwners) {
            console.log(JSON.stringify(petOwners));
            const _groupKey = 'gender';
            const _petType = 'Cat';
            const _cats: {} = _.reduce(
                // this.petOwners$,
                petOwners,
                (result, owner) => {
                    const _c: Pet[] = _.filter(owner.pets, { type: _petType });
                    if (_c.length > 0) {
                        (
                            result[owner.gender] || (result[owner.gender] = [])
                        ).append(_.map(_c, (pet: Pet) => pet.name));
                    }
                    return result;
                },
                {}
            );
            _result = _.reduce(
                _cats,
                (result, cats, gender) => {
                    result.push({
                        groupName: gender,
                        pets: _.sort(cats)
                    } as PetGroup);
                    return result;
                },
                []
            );
        }
        return _result;
    }
}
