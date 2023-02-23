import { module } from '@framework/index';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { appHeader } from './components/header/app.header';

export const appModule = module({
  rootComponent: AppComponent,
  components: [appHeader],
  routes: appRoutes,
});
