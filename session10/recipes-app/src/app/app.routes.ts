import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './guards/auth.guard';
import { AddRecipeReactiveComponent } from './add-recipe-reactive/add-recipe-reactive.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
    {
        path: '',
        component: RecipesListComponent,
        title: 'Recipe List'
    },
    {
        path: 'add-recipe-template',
        component: AddRecipeComponent,
        title: 'Add Recipe Template',
        canActivate: [authGuard]
    },
    {
        path: 'add-recipe-reactive',
        component: AddRecipeReactiveComponent,
        title: 'Add Recipe Reactive'
    },
    {
        path: 'recipe-details/:recipeId',
        component: RecipeDetailsComponent,
        title: 'Recipe Details'
    },
    {
        path: 'counter',
        component: CounterComponent,
        title: 'Counter'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
        children: [
            {
                path: 'settings',
                component: SettingsComponent,
                title: 'Settings',
            },
            {
                path: 'about',
                component: AboutComponent,
                title: 'About',
            }
        ]
    },
    {
        path: '**',
        component: NotFoundPageComponent,
        title: 'Not Found Page'
    }
];
