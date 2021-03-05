import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { JKComponent } from './jk/jk.component';
import { WorldComponent } from './world/world.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'jk',component:JKComponent},
  {path: 'world',component:WorldComponent},
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
