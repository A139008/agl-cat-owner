import { Pet } from './pet.model';

export interface PetOwner {
    name: string;
    gender: string;
    age: number;
    pets: Pet[];
    _isS;
}
