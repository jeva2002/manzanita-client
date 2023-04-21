import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'cms',
    loadChildren: () =>
      import('./pages/cms/cms.module').then((m) => m.CmsModule),
    title: 'Administrador',
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./pages/website/website.module').then((m) => m.WebsiteModule),
    title: 'Tienda Manzanita',
  },
  {
    path: '',
    redirectTo: '/shop',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Página no encontrada',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
