import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import thunk from 'redux-thunk';

import { AppComponent } from './components/app/app.component';
import rootReducer from './reducers';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { IPetOwner } from './services/pet-owner/ipet-owner';
import { PetOwnerService } from './services/pet-owner/pet-owner.service';
import { CatOwnerComponent } from './components/cat-owner/cat-owner.component';

@NgModule({
    declarations: [AppComponent, CatOwnerComponent],
    imports: [BrowserModule, NgReduxModule, HttpClientModule],
    providers: [
        { provide: ErrorHandler, useClass: ErrorHandlerService },
        { provide: IPetOwner, useClass: PetOwnerService }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<any>) {
        ngRedux.configureStore(rootReducer, {}, [thunk], []);
    }
}
