import { Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = 
[
    {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full'
    },
    {
        path: 'movies', component: HomeComponent
    },
    {
        path: 'movie/:id',
        component: MovieDetailComponent
    },
    {
        path: 'movies/search',
        component: SearchComponent
    }
];
