import { component } from '@framework/index';

export const appComponent = component({
  selector: 'root',
  template: `
  <app-header></app-header>
  app.component
  <app-footer></app-footer>
  `,
});
