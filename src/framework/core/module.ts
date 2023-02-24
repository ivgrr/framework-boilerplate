import { getPathName } from '../utils/router';
import { IModuleConfig } from '../types/module/IModuleConfig';

export const module = (config: IModuleConfig) => {
  const { rootComponent, components, routes } = config;

  return {
    init() {
      this.initComponents();
      if (routes && routes.length > 0) this.initRouter();
    },
    renderRoute() {
      const currentPath = getPathName();
      const route = routes.find((route) => route.path === currentPath);
      route.component.render();
    },
    initRouter() {
      const attributeRoutes = document.querySelectorAll('[routeTo]');
      window.addEventListener('popstate', (event) => {});
      const initialPath = getPathName();
      const curRou = routes.find((route) => route.path === initialPath);
      if (curRou) {
        curRou.component.render();
      }

      const pushUrl = (href: string) => {
        history.pushState({}, '', href);
        window.dispatchEvent(new Event('popstate'));
      };

      attributeRoutes.forEach((element: Element) => {
        element.addEventListener('click', (event: Event) => {
          event.preventDefault();
          element.setAttribute('href', '');
          const href = (event.target as HTMLElement).getAttribute('routeTo');

          if (href) {
            pushUrl(href);
            this.renderRoute();
          }
        });
      });
    },
    initComponents() {
      rootComponent.render();

      for (const component of components) {
        component.render();
      }
    },
  };
};
