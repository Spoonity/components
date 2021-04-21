import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AtomsComponent } from './atoms/atoms.component';
import { MoleculesComponent } from './molecules/molecules.component';
import { OrganismsComponent } from './organisms/organisms.component';
import { SideNavigationType } from './utils/enums';

const routes: Routes = [
  { path: '', redirectTo: '/atoms', pathMatch: 'full' },
  { path: 'atoms', component: AtomsComponent },
  { path: 'molecules', component: MoleculesComponent },
  { path: 'organisms', component: OrganismsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  sideNavigationType = SideNavigationType;
}
