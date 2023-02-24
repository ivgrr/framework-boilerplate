import { component } from '@framework/index';

export const AppComponent = component({
  selector: 'root',
  template: `
  <app-header></app-header>
  <app-author-page></app-author-page>
  <app-home-page></app-home-page>
  <app-footer></app-footer>
  `,
});
