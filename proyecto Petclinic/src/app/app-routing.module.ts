import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { VetsComponent } from './components/vets/vets.component';
import { FormVetComponent } from './components/form-vet/form-vet.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { FormSpecialitiesComponent } from './components/form-specialities/form-specialities.component';
//import { PetTypesComponent } from './components/pet-types/pet-types.component';
import { DetailVetComponent } from './components/detail-vet/detail-vet.component';
import { FormPetTypeComponent } from './components/form-pet-type/form-pet-type.component';
import { PetTypeComponent } from './components/pet-type/pet-type.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "owners",
    component: OwnersComponent
  },
  {
    path: "owners/:id",
    component: DetailOwnerComponent
  },
  {
    path: 'owners-add/:id',
    component: FormOwnerComponent
  },
  {
    path: 'vets',
    component: VetsComponent
  },
  {
    path: "vets/:id",
    component: DetailVetComponent
  },
  {
    path: 'vets-add/:id',
    component: FormVetComponent
  },
  {
    path: 'specialities',
    component: SpecialitiesComponent
  },
  {
    path: 'specialities-add/:id',
    component: FormSpecialitiesComponent
  },
  {
    path: 'types',
    component: PetTypeComponent
  },
  {
    path: 'types-add/:id',
    component: FormPetTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
