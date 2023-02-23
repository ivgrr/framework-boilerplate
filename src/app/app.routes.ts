import { IRoute } from '@framework/index';
import { AuthorPageComponent } from './pages/author-page/author-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const appRoutes: IRoute[] = [
  { path: '', component: HomePageComponent },
  { path: 'author', component: AuthorPageComponent },
];
