import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'store', component: StoreComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: '**', component: PageNotFoundComponent}
];
