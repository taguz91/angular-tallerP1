import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { BodyComponent } from './componentes/body/body.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';

const ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'about', component: AcercaDeComponent},
    { path: 'empleados', component: EmpleadosComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
