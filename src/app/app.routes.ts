import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ConferenceList } from './conferance-list/conferance-list';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'Liste-conference', component: ConferenceList }
];