import { component } from '@framework/index';

export const AppHeader = component({
  selector: 'app-header',
  template: `
  <span>HEADER</span>
  <a href routeTo="/author">link to author</a>
  <a href routeTo="/">link to home</a>
  `,
});
