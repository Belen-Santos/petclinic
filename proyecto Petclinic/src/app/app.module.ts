import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { VetsComponent } from './components/vets/vets.component';
import { FormVetComponent } from './components/form-vet/form-vet.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { FormSpecialitiesComponent } from './components/form-specialities/form-specialities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailVetComponent } from './components/detail-vet/detail-vet.component';
import { FormPetTypeComponent } from './components/form-pet-type/form-pet-type.component';
import { PetTypeComponent } from './components/pet-type/pet-type.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnersComponent,
    DetailOwnerComponent,
    FormOwnerComponent,
    VetsComponent,
    FormVetComponent,
    SpecialitiesComponent,
    FormSpecialitiesComponent,
    DetailVetComponent,
    FormPetTypeComponent,
    PetTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
