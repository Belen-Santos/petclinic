import { Speciality } from '../models/speciality';

export class Vet {
    id: number;
    firstName: string;
    lastName: string;
    specialties: Speciality[];
}
