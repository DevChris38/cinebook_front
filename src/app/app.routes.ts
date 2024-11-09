import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DataInputPageComponent } from './data-input-page/data-input-page.component';
import { MySiteComponent } from './my-site/my-site.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';

export const routes: Routes = [
  { path: 'mysite', component: MySiteComponent },
  { path: 'annuaire', component: AnnuaireComponent },
  { path: 'input', component: DataInputPageComponent },
  { path: 'home', component: CustomerHomeComponent },
  { path: '', component: HomePageComponent },
];
