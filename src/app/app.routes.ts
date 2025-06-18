import { Routes } from '@angular/router';

// Importación de componentes
import { HomeComponent } from './components/home/home.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { BlogComponent } from './components/blog/blog.component';
import { AdminComponent } from './components/admin/admin.component';
// Si tienes Login y Register, agrégalos también:
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'admin', component: AdminComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];