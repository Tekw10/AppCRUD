import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cliente',
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    loadChildren: () => import('./paginas/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'modal-cliente',
    loadChildren: () => import('./paginas/modal-cliente/modal-cliente.module').then( m => m.ModalClientePageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./paginas/produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'modal-produto',
    loadChildren: () => import('./paginas/modal-produto/modal-produto.module').then( m => m.ModalProdutoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
