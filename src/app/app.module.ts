import { module } from '@framework/index';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppFooter } from './components/footer/app.footer';
import { AppHeader } from './components/header/app.header';
import { AuthorPageComponent } from './pages/author-page/author-page.component';

export const AppModule = module({
  rootComponent: AppComponent,
  components: [AppHeader, AppFooter],
  routes: appRoutes,
});
