import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateDetailComponent } from './date-detail/date-detail.component';
import { DatesComponent } from './dates/dates.component';
import { HomeComponent } from './home/home.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', 
    component: WorksComponent,
    children: [
      { path: ':id', component: WorkDetailComponent}
    ]
  },
  { path: 'dates', 
    component: DatesComponent,
    children: [
      { path: ':year', component: DateDetailComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
