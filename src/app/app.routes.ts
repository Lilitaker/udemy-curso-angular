import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

/* Aquí se definen las rutas de nuestra aplicación */
export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    // Redirects home when trying to access an unknown path
    path: '**',
    redirectTo: '',
  }
];
