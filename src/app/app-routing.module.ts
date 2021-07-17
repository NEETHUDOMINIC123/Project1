import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateComponent } from './corporate/corporate.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:'corporate',component:CorporateComponent},{path:'register',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
