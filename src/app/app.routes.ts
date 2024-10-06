import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailsComponent}
];
