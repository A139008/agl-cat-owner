import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import thunk from 'redux-thunk';

import { AppComponent } from './components/app/app.component';
import { CatOwnerComponent } from './components/cat-owner/cat-owner.component';
import rootReducer from './reducers/index';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { IPetOwner } from './services/pet-owner/ipet-owner';
import { PetOwnerService } from './services/pet-owner/pet-owner.service';
import { PetOwnerActions } from './actions/pet-owner/pet-owner-actions';
import { KeysPipe } from './utilities/pipes/keys.pipe';

@NgModule({
    declarations: [AppComponent, CatOwnerComponent, KeysPipe],
    imports: [BrowserModule, NgReduxModule, HttpClientModule],
    providers: [
        ErrorHandlerService,
        PetOwnerActions,
        { provide: IPetOwner, useClass: PetOwnerService }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<any>) {
        ngRedux.configureStore(rootReducer, {}, [thunk], []);
    }
}
