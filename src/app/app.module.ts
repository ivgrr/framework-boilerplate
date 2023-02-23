import { module } from '@framework/index';
import { appComponent } from './app.component';
import { appHeader } from './components/header/app.header';

export const appModule = module({
  rootComponent: appComponent,
  components: [appHeader],
  routes: [],
});
