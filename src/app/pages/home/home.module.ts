import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from "@angular/router";
import { TrilhaComponent } from './trilha/trilha.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [DashboardComponent, TrilhaComponent],
  imports: [

    RouterModule.forChild([
      {
        path: "",
        component: TrilhaComponent,
        children: [
          {
            path: "",
            redirectTo: "statement",
            pathMatch: "full"
          }]
      }]),
    CommonModule,
    MatToolbarModule
  ]
})
export class HomeModule { }
