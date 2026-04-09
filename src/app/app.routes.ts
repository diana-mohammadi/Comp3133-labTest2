import { Routes } from '@angular/router';
import { Characterlist } from './components/characterlist/characterlist';
import { Characterdetails } from './components/characterdetails/characterdetails';

export const routes: Routes = [
  // home page shows all characters
  { path: '', component: Characterlist },

  // details page for selected character
  { path: 'character/:id', component: Characterdetails },

  // wrong path goes back to home page
  { path: '**', redirectTo: '' }
];