import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ContentComponent } from './components/content/content.component';
const microfrontPath = environment.microfrontend.map(micro => {
  return {
    path: micro.routePath,
    //loadChildren: () => import('portail/Module').then(m => m.PortailModule)
   loadChildren: () => loadRemoteModule(micro).then(m => m[micro.ngModuleName]),
  }
})
const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  ...microfrontPath
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
