import { Pet } from './Pet.model';

export interface PetOwner {
    name: string;
    gender: string;
    age: number;
    pets: Pet[];
    _isS;
}
