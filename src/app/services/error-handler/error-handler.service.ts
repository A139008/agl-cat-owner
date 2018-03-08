import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
// import { LoggingService } from './logging'; // out of scope now
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { isString } from 'util';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
    constructor(private _injector: Injector) {}

    handleError(
        error: any,
        userMessage: string = 'Something bad happened; please try again later.'
    ): ErrorObservable {
        let _message: string;
        // const loggingService = this.injector.get(LoggingService);
        const location = this._injector.get(LocationStrategy);
        const url =
            location instanceof PathLocationStrategy ? location.path() : '';
        if (error instanceof Response) {
            const _response: Response = error as Response;
            const body = _response.json();
            const err = JSON.stringify(body);
            _message =
                `Backend returned code - ${error.status}, ` +
                `Backend returned text - ${error.statusText || ''}, ` +
                `body was: ${err}`;
        } else if (error instanceof HttpErrorResponse) {
            const _httpError = error as HttpErrorResponse;
            if (_httpError.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _message = `An error occurred: ${_httpError.error.message}`;
            } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _message =
                    `Backend returned code - ${_httpError.status}, ` +
                    `Backend returned text - ${_httpError.statusText}, ` +
                    `body was: ${JSON.stringify(_httpError.error)}`;
            }
        } else {
            _message =
                error.message && isString(error.message)
                    ? error.message
                    : error.toString();
        }
        console.error(_message);
        // loggingService.log({ message: this.message, url: url });

        // return an ErrorObservable with a user-facing error message
        // todo: Need to check for prod environment
        return new ErrorObservable(userMessage);
    }
}
