import { Pet } from './Pet.model';

export interface PetGroup {
    groupId: number;
    groupName: string;
    pets: Pet[];
}
