import { DashboardComponent } from './pages/home/dashboard.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule)
      },
  ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
