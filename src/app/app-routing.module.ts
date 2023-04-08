import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTOkartComponent } from './add-to-cart/addtokart.component';
import { AuthGuard } from './auth.guard';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [

  {
    path: '',
    component: LogInComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },

  {
    path: 'home',
    component: HomeComponentComponent, canActivate:[AuthGuard]
  },
  {
    path: 'add-to-cart',
    component: AddTOkartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
