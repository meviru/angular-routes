import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BlackComponent } from './product/black/black.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "products",
    children: [
      {
        path: "",
        component: ProductComponent
      },
      {
        path: "black",
        component: BlackComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }