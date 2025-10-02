import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsListComponent,
        title: 'Products App'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'cart/:productId',
        component: CartComponent,
        title: 'Cart'
    },
    {
        path: 'product-details/:productId',
        component: ProductDetailsComponent,
        title: 'Product Details'
    },
    {
        path:'**',
        component: NotFoundPageComponent,
        title: 'Not Found Page'
    }
];
