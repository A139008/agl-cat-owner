import { PetOwner } from '../../models/pet-owner.model';
import { Observable } from 'rxjs/Observable';

export abstract class IPetOwner {
    abstract getPetOwner: () => Observable<PetOwner[]>;
}
