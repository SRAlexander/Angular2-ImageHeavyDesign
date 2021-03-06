import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  { path:'home', component : HomeComponent},
  { path:'home2', component : Home2Component},
  { path:'about', component: AboutComponent},
  { path:'projects', component: ProjectsComponent},
  { path:'', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
