import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IPetOwner } from './ipet-owner';
import { PetOwner } from '../../models/pet-owner.model';
import { ErrorHandlerService } from '../error-handler/error-handler.service';

@Injectable()
export class PetOwnerService implements IPetOwner {
    private _getUrl = 'http://agl-developer-test.azurewebsites.net/people.json';
    constructor(
        private _http: HttpClient,
        private _errHandler: ErrorHandlerService
    ) {}

    getPetOwner(): Observable<PetOwner[]> {
        return this._http
            .get(this._getUrl)
            .catch((err: Response | any) => {
                return this._errHandler.handleError(
                    err,
                    'Could not load Pet Owner details. Sorry!!! Please tray again later...'
                );
            })
            .map(data => data.json() as PetOwner[]);
    }
}
